import express = require("express");
import { requireJsonContent } from "./middlewares";
import { RouterExample } from "./src/Example";
const app = express();

const port = 3000;
app.use(requireJsonContent);
app.use(express.json());
app.use("/example", RouterExample);
app.listen(port, () => {
  console.info(`Server running on http://localhost:${port}`);
});
