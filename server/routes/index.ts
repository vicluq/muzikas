import authRoutes from "./auth.routes.js";
import categoryRoutes from "./categories.routes.js";

export const auth = { path: "/auth", routes: authRoutes };
export const category = { path: "/category", routes: categoryRoutes };