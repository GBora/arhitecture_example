import { Router, Request, Response } from "express";
import path from "path";

const frontRoutes = Router();

frontRoutes.get("/",(req: Request, res: Response) => {
    res.sendFile(path.join(__dirname+'../../../public/index.html'));
})

export default frontRoutes;