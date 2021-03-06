"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./users/userRoutes"));
const friendshipRoutes_1 = __importDefault(require("./friendships/friendshipRoutes"));
const messagesRoutes_1 = __importDefault(require("./messages/messagesRoutes"));
const routes = express_1.Router();
routes.use("/users", userRoutes_1.default);
routes.use("/friendship", friendshipRoutes_1.default);
routes.use("/messages", messagesRoutes_1.default);
exports.default = routes;
//# sourceMappingURL=routesIndex.js.map