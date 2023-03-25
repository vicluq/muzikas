import express from "express";
import cors from "cors";
import env from './config/env.js';

const app = express();

app.use(
  cors({
    origin: env.DEV_ORIGIN,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Authentication Check Middleware
app.use((req, res, next) => {
  // TODO authenticate -> req.header.authorization -> bearer tokenBase64
  next();
});

// TODO Routers bellow

app.listen(env.DEV_PORT, () => {
  console.log("Server running at", env.DEV_PORT);
});
