"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../../controllers/userController"));
const userRoutes = express_1.Router();
const userCtrl = new userController_1.default();
userRoutes.post("/new", (req, res) => {
    try {
        userCtrl.addNewUser(req.body);
    }
    catch (err) {
        res.sendStatus(500);
    }
    res.json({ ok: true });
});
userRoutes.post("/search", (req, res) => {
    try {
        userCtrl.searchUser(req.body).then((searchResults) => {
            res.json(searchResults);
        });
    }
    catch (err) {
        res.sendStatus(500);
    }
});
userRoutes.post("/login", (req, res) => {
    try {
        userCtrl.login(req.body).then((user) => {
            if (user) {
                res.json(user);
            }
            else {
                res.sendStatus(401);
            }
        });
    }
    catch (err) {
        res.sendStatus(401);
    }
});
exports.default = userRoutes;
//# sourceMappingURL=userRoutes.js.map