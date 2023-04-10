import DBClient from "../db/client.js"
import { Supplier } from "../types/supplier.js";
import envs from "../config/env.js";

export default class SupplierService {
    private supplierData: Supplier

    public getSupplier(email: string) {
        const db = new DBClient(<string>envs.DATABASE_URL).connect();
        console.info("Database URL:", envs.DATABASE_URL)
        return new Promise<Supplier>((resolve, reject) => {
            db.get(
                `SELECT * FROM suppliers WHERE email = (?)`, [email],
                (err: any, data: Supplier) => {
                    db.close();
                    if (err != undefined) {
                        console.error(err.message);
                        reject(err);
                    }
                    resolve(data);
                }
            )
        })
    }

    public updateSupplier(email: string, token: string) {
        const db = new DBClient(<string>envs.DATABASE_URL).connect();
        return new Promise<any>((resolve, reject) => {
            db.run(
                `UPDATE suppliers SET token = (?) WHERE email = (?)`, [token, email],
                (err: any) => {
                    db.close();
                    if (err) { reject(err) }
                    resolve(true)
                }
            )
        })
    }

    public static insertSupplier(supplier: Supplier) {
        const db = new DBClient(envs.DATABASE_URL).connect();
        const keys = String(Object.keys(supplier).filter((k) => {
            return k !== undefined && k !== "token"
        }))

        const values = String(Object.values(supplier).filter((v) => v !== undefined && v !== "").map(p => `'${p}'`))
        console.info("Keys:", keys)
        console.info("Values:", values)
        const query = `INSERT INTO suppliers (${keys})  VALUES (${values})`
        console.info(query)
        return new Promise<boolean>((resolve, reject) => {
            db.run(`INSERT INTO suppliers (${keys})  VALUES (${values})`,
                (error) => {
                    if (error) {
                        console.error("Error inserting, error:", error)
                        reject(false)
                    }
                    resolve(true)
                }
            )
        })


    }


}