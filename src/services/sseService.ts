export interface ISseService {
    addUser(email: string, connection: any): void;
    removeUser(email: string): void;
    getUserConnection(email: string): any;
}

export default class SseService {

    private static activeUsers: any = {}

    static addUser(email: string, connection: any): void {
        this.activeUsers[email] = connection;
    }    
    
    static removeUser(email: string): void {
        delete this.activeUsers[email];
    }

    static getUserConnection(email: string) {
        if (this.activeUsers[email]) {
            return this.activeUsers[email]
        } else {
            console.warn('User with email ' + email + ' is not currently connected.');
            return null;
            // throw new Error('User with email ' + email + ' is not currently connected.');
        }

    }

}