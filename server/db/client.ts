import pkg from "sqlite3";
const { Database } = pkg;
export default class DatabaseClient {
  private DB_URL;

  constructor(dbURL: string) {
    this.DB_URL = dbURL;
  }

  public connect() {
    return new Database(this.DB_URL, (err) => {
      if (err) {
        console.error(`Can't connect to ${this.DB_URL}`);
        throw err;
      }
    }); //starts the connection
  }
}
