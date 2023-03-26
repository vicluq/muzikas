import DBClient from "../db/client";
import { User, Suppiler } from "../types/user";
import envs from "../config/env";

type UserType = "user" | "supplier";
type UserData = Partial<User> | Partial<Suppiler>;

export default class UserService {
  private dbClient: DBClient;
  private type: UserType;
  private userData: UserData;

  constructor(data: UserData, type: UserType) {
    this.userData = { ...data };
    this.type = type;
    this.dbClient = new DBClient(envs.DB_URL);
  }

  static insertUser(data: UserData) {
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

  static updateUser(data: UserData) {

  }

  static deleteUser(email: string) {
      
  }
}
