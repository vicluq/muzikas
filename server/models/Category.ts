import DBClient from "../db/client";
import { Category } from "../types/category";
import envs from "../config/env";

type CategoryData = Partial<Category>;

export default class CategoryService {
  private dbClient: DBClient;
  private categoryData: CategoryData;

  constructor(data: CategoryData) {
    this.categoryData = { ...data };
    this.dbClient = new DBClient(envs.DB_URL);
  }

  static insertCategory(data: CategoryData) {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<any>((resolve, reject) => {
      db.run(`INSERT INTO Category(${""}) VALUES(${""})`, (err: any) => {
        db.close();

        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }

  static updateCategory(id: number, data: CategoryData) {}

  static deleteCategory(id: number) {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<any>((resolve, reject) => {
      db.run(`DELETE FROM User WHERE id = ${id}`, (err: any) => {
        db.close();

        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }

  static getCategories() {}

  static getCategory(id: number) {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<CategoryData>((resolve, reject) => {
      db.get(
        `SELECT * FROM Category WHERE id = ${id}`,
        (err: any, data: CategoryData) => {
          db.close();

          if (err) {
            console.error(err.message);
            reject(err);
          }

          resolve(data);
        }
      );
    });
  }
}
