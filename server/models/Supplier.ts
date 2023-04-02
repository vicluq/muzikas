import DBClient from "../db/client.js"
import { Supplier } from "../types/supplier.js";
import envs from "../config/env.js";

export default class SupplierService {
    private dbClient = new DBClient(envs.DATABASE_URL);
    private supplierData: Supplier

    public getSupplier(username: string){
        const db = this.dbClient.connect();
        console.info("Database URL:", envs.DATABASE_URL)
        return new Promise<Supplier>((resolve,reject)=>{
            db.get(
                `SELECT * FROM suppliers WHERE username = (?)`,[username],
                (err: any, data: Supplier) => {
                    db.close();
                    if(err != undefined){
                        console.error(err.message);
                        reject(err);
                    }
                    resolve(data);
                }
            )
        })
    }

    public updateSupplier(username: string, token: string){
        const db = this.dbClient.connect();
        return new Promise<any>((resolve, reject) => {
            db.run(
                `UPDATE suppliers SET token = (?) WHERE username = (?)`,[token, username],
                (err: any) => {
                    db.close();
                    if(err) { reject(err) }
                    resolve(true)
                }
            )
        })
    }
    
    
}