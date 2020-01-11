import { Router } from "express";
import userRoutes from "./users/userRoutes";
import friendshipRoutes from "./friendships/friendshipRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/friendship", friendshipRoutes);

export default routes;