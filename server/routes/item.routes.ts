import { Router } from "express";
import ItemService from "../models/Item.js";
import { authMiddleware } from '../middlewares.js'
import { AuthMiddlewareReq } from '../types/auth.js';

import { Item } from "../types/item";

const router = Router();

router.get("/getItems", async (req, res) => {
    const { supplierId, search } = req.query;
    
    let query = '';
    if(search) query = <string>search;

    let supId = undefined;
    if(supplierId) supId = Number(supplierId);
    
    try {
        const items = await ItemService.getItems(query, supId);

        return res.status(200).json(items);
    } catch (err) {
        console.error(err);

        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.get("/getItem/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const item = await ItemService.getItem(Number(id));

        return res.status(200).json(item);
    } catch (err) {
        console.error(err);

        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.post("/create", authMiddleware, async (req: AuthMiddlewareReq, res) => {
    const { name, desc, picture, price, inStock, categoriesIds } = req.body;

    const item: Partial<Item> = {
        name,
        price,
        inStock,
        supplierId: req.supplierId,
        categories: categoriesIds
    };

    // Optional Attributes
    if (desc) item.desc = desc;
    if (picture) item.picture = picture;

    if (price <= 0) {
        return res.status(422).send({
            message: "Invalid price",
            errorType: 'validation',
        });
    }

    if (inStock < 0) {
        return res.status(422).send({
            message: "Invalid stock amount",
            errorType: 'validation',
        });
    }

    try {
        await ItemService.insertItem(item); // inserindo item

        return res.status(200).json({
            message: name + " created with success!"
        });
    }
    catch (err) {
        console.error(err);

        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
})

router.put("/put/:id", authMiddleware, async (req: AuthMiddlewareReq, res) => {
    const { id } = req.params;
    const { name, desc, picture, price, inStock, supplierId } = req.body;

    if(req.supplierId !== supplierId) {
        return res.status(403).send({
            message: "You are not the supplier of this product.",
            errorType: 'not allowed',
        });
    }

    if(!name) {
        return res.status(422).send({
            message: "Invalid name.",
            errorType: 'validation',
        });
    }

    if(!desc) {
        return res.status(422).send({
            message: "Invalid description.",
            errorType: 'validation',
        });
    }

    if (price <= 0) {
        return res.status(422).send({
            message: "Invalid price",
            errorType: 'validation',
        });
    }

    if (inStock < 0) {
        return res.status(422).send({
            message: "Invalid stock amount",
            errorType: 'validation',
        });
    }

    try {
        await ItemService.insertItem(req.body); // inserindo item

        return res.status(200).json({
            message: name + " updated with success!"
        });
    }
    catch (err) {
        console.error(err);

        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

router.delete("/delete/:id", authMiddleware, async (req: AuthMiddlewareReq, res) => {
    const { id } = req.params;

    try {
        const item = await ItemService.getItem(Number(id));

        if(req.supplierId !== item.supplierId) {
            return res.status(403).send({
                message: "You are not the supplier of this product.",
                errorType: 'not allowed',
            });
        }

        await ItemService.deleteItem(Number(id));

        return res.status(200).json({ message: "Deleted item with success." });
    } catch (err) {
        console.error(err);

        return res.status(500).send({
            message: "Internal problems.",
            errorType: 'internal',
        });
    }
});

export default router;