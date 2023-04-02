import DBClient from "../db/client.js";
import { Category } from "../types/category.js";
import envs from "../config/env.js";
import { mapObjectToString, mapObjectToUpdate } from '../utils/mapObject';

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

    const { mappedKeys, mappedValues } = mapObjectToString(data);

    return new Promise<any>((resolve, reject) => {
      db.run(`INSERT INTO Category(${mappedKeys}) VALUES(${mappedValues})`,
        (err: any) => {
          db.close();

          if (err) {
            reject(err);
          }

          resolve(true);
        });
    });
  }

  static updateCategory(id: number, data: CategoryData) {
    // @ts-ignore
    const db = this.dbClient.connect();

    const mappedObjToString = mapObjectToUpdate(data);

    return new Promise<any>((resolve, reject) => {
      db.run(`UPDATE Category SET ${mappedObjToString} WHERE id = ${id}`,
        (err: any) => {
          db.close();

          if (err) {
            reject(err);
          }

          resolve(true);
        });
    });
  }

  static deleteCategory(id: number) {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<any>((resolve, reject) => {
      db.run(`DELETE FROM Category WHERE id = ${id}`, (err: any) => {
        db.close();

        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }

  static getCategories() {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<CategoryData>((resolve, reject) => {
      db.get(
        `SELECT * FROM Category`,
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
