import { Router } from "express";
import userRoutes from "./users/userRoutes";

const routes = Router();

routes.use("/users", userRoutes);

export default routes;