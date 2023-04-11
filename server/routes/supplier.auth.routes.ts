import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import envs from "../config/env.js"
import { ErrorType } from "../types/error";
import { Supplier } from "../types/supplier.js"
import SupplierService from "../models/Supplier.js";

const supplierRouter = Router()
supplierRouter.get("/", (req, res) => res.sendStatus(200))

supplierRouter.post("/login", async (req, res) => {
    const payload = req.body;
    const email: string = payload.email
    const password: string = payload.password
    console.log(payload)

    if (!email || !password) {
        return res.status(400).json({
            status: 500,
            message: "Missing email or password.",
            errorType: "validation",
        })
    }

    try {
        const supplierService = new SupplierService()
        const supplier: Supplier = await supplierService.getSupplier(email)
        let error: boolean = false

        const isEqual = (password === supplier.password)
        if ((supplier === undefined) || (!isEqual)) { error = true }

        if (error) { return res.sendStatus(401) }

        const expDateMS = new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        const tokenExpiration = expDateMS;

        const supplierTokenData: any = {
            email: supplier.email,
            validity: expDateMS,
        }
        const token = jwt.sign(supplierTokenData, envs.JWT_SECRET, { expiresIn: "7d" })
        await supplierService.updateSupplier(email, token)

        return res.status(200).json({
            id: supplier.id,
            email,
            token,
            tokenExpiration,
            cnpj: supplier.cnpj
        })

    } catch (err) {
        console.error(err)
        return res.status(500).json({
            status: 500,
            message: "Internal problems.",
            errorType: "internal",
        })
    }
})

supplierRouter.post('/create', async (req, res) => {
    const supplierData: any = req.body
    let register = false

    if(supplierData.confirmPassword !== supplierData.password) {
        return res.status(402).json({
            status: 402,
            message: "passwords don't match",
            errorType: "validation",
        })
    }

    delete supplierData.confirmPassword;

    try {
        register = await SupplierService.insertSupplier(supplierData)

    } catch (err) {
        console.error(err)
    } finally {
        if (register) {
            return res.status(200).json({
                status: 200,
                message: "User created.",
            })
        }
        else {
            return res.status(500).json({
                status: 500,
                message: "Internal problems.",
                errorType: "internal",
            })
        }

    }
})


export default supplierRouter;