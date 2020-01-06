import { Router, Request, Response } from "express";
import UserCtrl from "../../controllers/userController";
import IUser from "../../models/IUser";

const userRoutes = Router();

const userCtrl: UserCtrl = new UserCtrl();

userRoutes.post("/new", (req: Request, res: Response) => {
    try {
        userCtrl.addNewUser(req.body);
    } catch (err) {
        res.sendStatus(500);
    }
    res.sendStatus(200);
});

userRoutes.post("/search", (req: Request, res: Response) => {
    try {
        userCtrl.searchUser(req.body).then((searchResults: IUser[]) => {
            res.send(JSON.stringify(searchResults));
        })
    } catch (err) {
        res.sendStatus(500);
    }
});

export default userRoutes;