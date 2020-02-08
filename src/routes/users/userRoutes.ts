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
    res.json({ok: true});
});

userRoutes.post("/search", (req: Request, res: Response) => {
    try {
        userCtrl.searchUser(req.body).then((searchResults: IUser[]) => {
            res.json(searchResults);
        })
    } catch (err) {
        res.sendStatus(500);
    }
});

userRoutes.post("/login", (req: Request, res: Response) => {
    try {
        userCtrl.login(req.body).then((user: IUser) => {
            res.json(user);
        });
    } catch (err) {
        res.sendStatus(401);
    }
});

export default userRoutes;