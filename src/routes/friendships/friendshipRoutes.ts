import { Router, Request, Response } from "express";
import IUser from "../../models/IUser";
import FriendsCtrl from "../../controllers/friendsController";

const friendshipRoutes = Router();

const userCtrl: FriendsCtrl = new FriendsCtrl();

friendshipRoutes.post("/add-friend", (req: Request, res: Response) => {
    try {
        userCtrl.addFriend(req.body);
    } catch (err) {
        res.sendStatus(500);
    }
    res.json({ok: true});
});

friendshipRoutes.post("/get-friends", (req: Request, res: Response) => {
    try {
        userCtrl.getFriends(req.body).then((friends: IUser[]) => {
            res.json(friends);
        })
    } catch (err) {
        res.sendStatus(500);
    }
})

export default friendshipRoutes;