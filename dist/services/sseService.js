"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SseService {
    static addUser(email, connection) {
        this.activeUsers[email] = connection;
    }
    static removeUser(email) {
        delete this.activeUsers[email];
    }
    static getUserConnection(email) {
        if (this.activeUsers[email]) {
            return this.activeUsers[email];
        }
        else {
            console.warn('User with email ' + email + ' is not currently connected.');
            return null;
            // throw new Error('User with email ' + email + ' is not currently connected.');
        }
    }
}
exports.default = SseService;
SseService.activeUsers = {};
//# sourceMappingURL=sseService.js.map