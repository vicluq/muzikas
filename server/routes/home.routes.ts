import { Router } from "express";
//import ItemService from "../models/Item.js";
import { Item } from "../types/item";
import { Category } from "../types/category";

const router = Router();

function createRandomItem(): Item {
  const id = Math.floor(Math.random() * 1000) + 1;
  const supplierId = Math.floor(Math.random() * 10) + 1;
  const picture = `https://picsum.photos/id/${id}/200/200`;
  const name = `Item ${id}`;
  const desc = `Description of Item ${id}`;
  const price = (Math.floor(Math.random() * 100) + 1) * 10;
  const inStock = Math.floor(Math.random() * 100) + 1;
  const categories: Partial<Category>[] = [];

  for (let i = 0; i < 3; i++) {
    categories.push({
      id: Math.floor(Math.random() * 10) + 1,
      name: `Category ${i + 1}`,
    });
  }

  return {
    id,
    supplierId,
    picture,
    name,
    desc,
    price,
    inStock,
    categories,
  };
}

function getHomeItems(numItems: number): Item[] {
  const items: Item[] = [];

  for (let i = 0; i < numItems; i++) {
    items.push(createRandomItem());
  }

  return items;
}

router.get("/home", async (req, res) => {

    let items = getHomeItems(32);

    res.status(200).json({items: items});

})

export default router;
