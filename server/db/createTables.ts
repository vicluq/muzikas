import fs from 'fs';
import DatabaseClient from './client.js';
import envs from '../config/env.js';
import path from "path";
import { fileURLToPath } from "url";

// Extracting __dirname in ES6 module resolution (module must be ES2020)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tables = [
      "categories",
      "suppliers",
      'user',
      'items',
      'itemCategories',
      'promotions',
]

function createTableHandler(db: any, query: string) {
      return new Promise<any>((resolve, reject) => {
            db.run(query,
                  (err: any) => {
                        db.close();

                        if (err) {
                              reject(err);
                        }

                        resolve(true);
                  });
      });
}

for (let i = 0; i < tables.length; ++i) {
      const fileContent = fs.readFileSync(path.join(__dirname, `./sql/${tables[i]}.sql`)).toString();
      console.log(fileContent);

      const db = new DatabaseClient(<string>envs.DATABASE_URL).connect();

      try{
            await createTableHandler(db, fileContent);
      }
      catch(e) {
            console.error(e);
            throw e;
      }
}