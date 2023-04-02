import authRoutes from "./auth.routes.js";
import itemsRoutes from "./item.routes.js";

export const auth = { path: "/auth", routes: authRoutes };
export const item = { path: "/item", routes: itemsRoutes };