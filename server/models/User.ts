import DBClient from "../db/client.js";
import { User } from "../types/user.js";
import { Supplier } from "../types/supplier.js";
import envs from "../config/env.js";

type UserType = "user" | "supplier";
type UserData = Partial<User> | Partial<Supplier>;

export default class UserService {
  private dbClient = new DBClient(envs.DATABASE_URL);
  private type: UserType;
  private userData: UserData;

  constructor(data: UserData, type: UserType) {
    this.userData = { ...data };
    this.type = type;
  }

  static getUser(email: string) {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<UserData>((resolve, reject) => {
      db.get(
        `SELECT name, email, token, password FROM User WHERE email = ${email}`,
        (err: any, data: UserData) => {
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

  static insertUser(data: UserData) {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<any>((resolve, reject) => {
      db.run(`INSERT INTO User(${""}) VALUES(${""})`, (err: any) => {
        db.close();

        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }

  static updateUser(data: UserData) {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<any>((resolve, reject) => {
      db.run(
        `UPDATE User SET col1 = val1 WHERE email=${data.email}`,
        (err: any) => {
          db.close();

          if (err) {
            reject(err);
          }

          resolve(true);
        }
      );
    });
  }

  static deleteUser(email: string) {
    // @ts-ignore
    const db = this.dbClient.connect();

    return new Promise<any>((resolve, reject) => {
      db.run(`DELETE FROM User WHERE email = ${email}`, (err: any) => {
        db.close();

        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }
}
