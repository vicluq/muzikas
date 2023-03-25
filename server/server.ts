import express from "express";
import cors from "cors";

import envs from "./config/env";
import corsConfig from "./config/cors";
import { requireJsonContent } from "./middlewares";
import { RouterExample } from "./Example";

import { auth } from "./routes";

const app = express();

const PORT = envs.MODE === 'dev' ? envs.DEV_PORT : '';

// * Config Middlewares
app.use(cors(corsConfig));
app.use(requireJsonContent);
app.use(express.json());

// * Authentication Routes
app.use(auth.path, auth.routes);

app.use("/example", RouterExample);

app.listen(PORT, () => {
  if (envs.MODE === "dev") console.info(`Server running on ${envs.DEV_ORIGIN}`);
});
