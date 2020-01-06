"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserConvertor {
    static fromRawData(raw) {
        if (!raw) {
            throw new Error('No data to convert to user');
        }
        let user = {
            firstName: raw.firstName,
            lastName: raw.lastName,
            email: raw.email
        };
        if (raw.avatar) {
            user.avatar = raw.avatar;
        }
        return user;
    }
    static fromDBRow(raw) {
        let user = {
            firstName: raw.dataValues.FIRST_NAME,
            lastName: raw.dataValues.LAST_NAME,
            email: raw.dataValues.EMAIL
        };
        if (raw.dataValues.AVATAR) {
            user.avatar = raw.dataValues.AVATAR;
        }
        return user;
    }
}
exports.default = UserConvertor;
//# sourceMappingURL=userConverter.js.map