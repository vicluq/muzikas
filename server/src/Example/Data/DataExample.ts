import { Database } from "sqlite3";
import { insertQuery } from "./Queries";
export function getExampleById(id: Number) {}
export class DatabaseClient {
  public static async insertExample(content: string) {
    try {
      const database_path = "/server/muzikas.db";
      const db = new Database(database_path, (err) => {
        if (err) {
          console.error(`Not possible to connect to ${database_path}`);
        }
      }); //starts the connection
      db.run(
        "INSERT INTO table_example(content) VALUES(?) ",
        [content],
        (err) => {
          if (err) console.error(err.message);
        }
      ); // run insert query
      db.close(); //close connection
      return { status: 200, message: "New example inserted" };
    } catch (err) {
      return {
        status: 500,
        message: `Error on database, error:${err}`,
      };
    }
  }
}
