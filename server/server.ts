import express from "express";
import cors from "cors";

import envs from "./config/env.js";
import corsConfig from "./config/cors.js";
import { requireJsonContent } from "./middlewares.js";

import { auth, category, promotions, supplier, item } from "./routes/index.js";

const app = express();

const PORT = envs.MODE === 'dev' ? envs.DEV_PORT : '';

// * Config Middlewares
app.use(cors(corsConfig));
app.use(requireJsonContent);
app.use(express.json());

// * Authentication Routes
app.use(auth.path, auth.routes);

// * App Routes
app.use(category.path, category.routes);
app.use(promotions.path, promotions.routes)
app.use(supplier.path, supplier.routes);
app.use(item.path, item.routes);

app.listen(PORT, () => {
  if (envs.MODE === "dev") console.info(`Server running on ${envs.DEV_ORIGIN}`);
});

