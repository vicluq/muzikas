import DBClient from "../db/client";
import { Item } from "../types/item";
import envs from "../config/env";

type ItemData = Partial<Item>;

export default class ItemService {
    private dbClient: DBClient;
    private itemData: ItemData;

    constructor(data: ItemData) {
        this.itemData = { ...data };
        this.dbClient = new DBClient(envs.DB_URL);
    }

    static insertItem(data: ItemData) {
        try {
            // @ts-ignore
            const db = this.dbClient.connect();
            db.run(`INSERT INTO table_example(${''}) VALUES(${''})`, (err: any) => {
                if (err) {
                    console.error(err.message);
                    throw err;
                }
            });
            db.close();
        } catch (err) {
            throw err;
        }
    }

    static updateItem(data: ItemData) {

    }

    static deleteItem(item_id: number) {

    }

    static getItem(item_id: number) {

    }

    static getItems() {

    }
}
