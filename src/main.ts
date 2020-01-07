import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import routes from "./routes/routesIndex";

const app: Application = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/", routes);

app.listen(3000, () => {
    console.log('server online');
});