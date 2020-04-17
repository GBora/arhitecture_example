"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winstonConfig_1 = __importDefault(require("../config/winstonConfig"));
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.ErrorHandler = ErrorHandler;
exports.handleError = (err, res) => {
    const { statusCode, message } = err;
    winstonConfig_1.default.error(message);
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};
//# sourceMappingURL=error.js.map