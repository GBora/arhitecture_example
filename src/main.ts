import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import morgan from "morgan";

import routes from "./routes/routesIndex";
import configs from "./config/configs";
import { handleError } from "./helpers/error";

const app: Application = express();

app.use(bodyParser.json());

app.use(cors({credentials: false, origin: true}));
// Logging
app.use(morgan("combined"));

// The application will have it's routes on /api
app.use("/api", routes);
app.use(express.static(path.join(__dirname+'/public/')));

// Everithing else will be redirected to the FE app
app.all("/*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
})
// Error handler
app.use((err: any, req: Request, res: Response, next: any) => {
    handleError(err, res);
});

let port = process.env.PORT || configs.port;

app.listen(port, () => {
    console.log('server online on port', port);
});