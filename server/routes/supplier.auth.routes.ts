import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import envs from "../config/env.js"
import { ErrorType } from "../types/error";
import { Supplier } from "../types/supplier.js"
import SupplierService from "../models/Supplier.js";

const supplierRouter = Router()

supplierRouter.post("/login", async(req,res) => {
    const payload = req.body;
    const username: string = payload.username
    const password: string = payload.password
    console.log(payload)
    if(!username || !password){
        res.sendStatus(400)
        return
    }
    const encryptedPass = Buffer.from(password, "base64")
    const encryptedPassword = encryptedPass.toString("ascii")
    //console.info("Getting password:", encryptedPassword)
    try{
        const supplierService = new SupplierService()
        //console.info("Trying to get user")
        const supplier: Supplier = await supplierService.getSupplier(username)
        //console.info(supplier)
        let error: boolean = false

        // const isEqual = await bcrypt.compare(encryptedPassword, supplier.password)
        const isEqual = (encryptedPassword === supplier.password)
        //console.info("Password equal:", isEqual)
        if((supplier === undefined) || (!isEqual)) { error = true } 

        if(error){ return res.sendStatus(401) }

        const expDateMS = new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        const tokenExpiration = expDateMS

        const supplierTokenData: any = {
            username: supplier.username,
            validity: expDateMS,
        }
        const token = jwt.sign(supplierTokenData, envs.JWT_SECRET, { expiresIn: "7d" })
        //console.info("Trying to update")
        await supplierService.updateSupplier( username, token )

        return res.status(200).json({
            username,
            token,
            tokenExpiration
        })

    } catch(err) {
        //console.error(err)
        return res.status(500).json({
            status: 500,
            message: "Internal problems.",
            errorType: "internal",
        })
    }
})


export default supplierRouter;