import IUser from "../models/IUser";

export default class UserConvertor {
     public static fromRawData(raw: any): IUser {
        if (!raw) {
            throw new Error('No data to convert to user')
        }

        let user: IUser = {
            firstName: raw.firstName,
            lastName: raw.lastName,
            email: raw.email
        }

        if (raw.avatar) {
            user.avatar = raw.avatar;
        }

        return user;
     }

    public static fromDBRow(raw: any): IUser {
        let user: IUser = {
            firstName: raw.dataValues.FIRST_NAME,
            lastName: raw.dataValues.LAST_NAME,
            email: raw.dataValues.EMAIL
        }

        if (raw.dataValues.AVATAR) {
            user.avatar = raw.dataValues.AVATAR
        }

        return user
    }
}