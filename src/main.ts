import express, { Application } from "express";
import bodyParser from "body-parser";

import routes from "./routes/routesIndex";

const app: Application = express();

app.use(bodyParser.json());

app.use("/", routes);

app.listen(3000, () => {
    console.log('server online');
});