import DBClient from "../db/client";
import { Category } from "../types/category";
import envs from "../config/env";

type CategoryData = Partial<Category>;

export default class CategoryService { 
    private dbClient: DBClient;
    private categoryData: CategoryData;

    constructor(data: CategoryData){
        this.categoryData = { ...data };
        this.dbClient = new DBClient(envs.DB_URL);
    }

    static insertCategory(data: CategoryData) {
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
    
      static updateCategory(id:number, data: CategoryData) {
    
      }
    
      static deleteCategory(id: number) {
          
      }

      static getCategories(){

      }

      static getCategory(id: number){

      }
}