"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const frontRoutes = express_1.Router();
frontRoutes.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '../../../public/index.html'));
});
exports.default = frontRoutes;
//# sourceMappingURL=frontRoutes.js.map