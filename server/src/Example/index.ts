import { Router } from "express";
import { ExampleController } from "./API/ControllerExample";

const RouterExample = Router();
RouterExample.post("/", ExampleController.insertExample);
RouterExample.get("/", ExampleController.getExample);
export { RouterExample };
