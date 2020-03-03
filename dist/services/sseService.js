"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SseService {
    constructor() {
        this.activeUsers = {};
    }
    addUser(email, connection) {
        this.activeUsers[email] = connection;
    }
    removeUser(email) {
        delete this.activeUsers[email];
    }
    getUserConnection(email) {
        if (this.activeUsers[email]) {
            return this.activeUsers[email];
        }
        else {
            throw new Error('User with email ' + email + ' is not currently connected.');
        }
    }
}
exports.default = SseService;
//# sourceMappingURL=sseService.js.map