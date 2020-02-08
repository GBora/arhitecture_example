import { Router } from "express";
import userRoutes from "./users/userRoutes";
import friendshipRoutes from "./friendships/friendshipRoutes";
import messagesRoutes from "./messages/messagesRoutes";
import frontRoutes from "./front/frontRoutes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/friendship", friendshipRoutes);
routes.use("/messages", messagesRoutes);
routes.use("/front", frontRoutes);

export default routes;