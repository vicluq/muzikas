import { Router } from "express";
import envs from "../config/env.js";
import ItemService from "../models/Item.js";

import { Item } from "../types/item";

const router = Router();

router.get("/get", (req, res) => {

});

router.post("/create", (req, res) => {
    const {item_id, name, desc } = req.body;

    const item: Partial<Item> = {
        item_id,
        name,
        desc,
    };

    try {
        ItemService.insertItem({item_id, name, desc})
    }
    catch(err) {

    }

    return res.status(200).json({
        item_id: item.item_id,
        desc: item.desc,
    });
});

router.put("/put/:id", (req, res) => {
    const { id } = req.params;
});

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
});

export default router;