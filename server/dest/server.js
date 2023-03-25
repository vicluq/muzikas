import express from "express";
import { config as envConfig } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import env from './config/env.js';
// Extracting __dirname in ES6 module resolution (module must be ES2020)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
envConfig({ path: path.resolve(__dirname, "../.env") });
const app = express();
app.use(cors({
    origin: env.DEV_ORIGIN,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Authentication Check Middleware
app.use((req, res, next) => {
    // TODO authenticate -> req.header.authorization -> bearer tokenBase64
    next();
});
// TODO Routers bellow
app.listen(env.DEV_PORT, () => {
    console.log("Server running at", env.DEV_PORT);
});
