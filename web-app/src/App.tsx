import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import appRouter from "./router";

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
