import { Router } from "express";
import ItemService from "../models/Item.js";
import { authMiddleware } from '../middlewares.js'

import { Item } from "../types/item";

const router = Router();

router.get("/getItems", async (req, res) => {
    try {
        const items = await ItemService.getItems();

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

router.post("/create", authMiddleware, async (req, res) => {
    const { name, desc, picture, price, inStock, categoriesIds } = req.body;

    const item: Partial<Item> = {
        name,
        price,
        inStock
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

router.put("/put/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { name, desc, picture, price, inStock } = req.body;

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

router.delete("/delete/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        await ItemService.getItems();

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