import path from "path";
import { fileURLToPath } from "url";
import { config as envConfig } from "dotenv";
// Extracting __dirname in ES6 module resolution (module must be ES2020)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
envConfig({ path: path.resolve(__dirname, "../../.env") });
export default Object.assign({}, process.env);
