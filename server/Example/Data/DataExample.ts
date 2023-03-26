import { Database } from "sqlite3";
import { Example } from "../typings";
export class DatabaseClient {


  private static startConnection() {

    const _databaseURL = process.env.DATABASE_URL
    return new Database(_databaseURL, (err) => {
      if (err) {
        console.error(`Not possible to connect to ${_databaseURL}`);
        throw err
      }
    }); //starts the connection
  }

  public static async insertExample(content: string) {
    try {
      const db = DatabaseClient.startConnection()
      db.run(
        "INSERT INTO table_example(content) VALUES(?) ",
        [content],
        (err) => {
          if (err) {
            console.error(err.message);
            throw err
          }
        }
      ); // run insert query
      db.close(); //close connection
    } catch (err) {
      throw err
    }
  }

  public static async getExample(exampleId: number) {
    const db = DatabaseClient.startConnection()
    return new Promise<Example>((resolve, reject) => {
      db.get(
        `SELECT * FROM table_example WHERE id=(?)`, [exampleId],
        (err, res) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(res);
          }
        }
      )
    });
  }
}
