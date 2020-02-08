import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import routes from "./routes/routesIndex";
import configs from "./config/configs";

const app: Application = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/", routes);
app.use(express.static("./public/"));

let port = process.env.PORT || configs.port;

app.listen(port, () => {
    console.log('server online on port', port);
});