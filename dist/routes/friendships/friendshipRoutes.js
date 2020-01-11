"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const friendsController_1 = __importDefault(require("../../controllers/friendsController"));
const friendshipRoutes = express_1.Router();
const userCtrl = new friendsController_1.default();
friendshipRoutes.post("/add-friend", (req, res) => {
    try {
        userCtrl.addFriend(req.body);
    }
    catch (err) {
        res.sendStatus(500);
    }
    res.json({ ok: true });
});
friendshipRoutes.post("/get-friends", (req, res) => {
    try {
        userCtrl.getFriends(req.body).then((friends) => {
            res.json(friends);
        });
    }
    catch (err) {
        res.sendStatus(500);
    }
});
exports.default = friendshipRoutes;
//# sourceMappingURL=friendshipRoutes.js.map