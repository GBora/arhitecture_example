"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routesIndex_1 = __importDefault(require("./routes/routesIndex"));
const configs_1 = __importDefault(require("./config/configs"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use("/", routesIndex_1.default);
let port = process.env.PORT || configs_1.default.port;
app.listen(port, () => {
    console.log('server online on port', port);
});
//# sourceMappingURL=main.js.map