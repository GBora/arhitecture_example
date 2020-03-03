export interface ISseService {
    addUser(email: string, connection: any): void;
    removeUser(email: string): void;
    getUserConnection(email: string): any;
}

export default class SseService implements ISseService {

    private activeUsers: any = {}

    addUser(email: string, connection: any): void {
        this.activeUsers[email] = connection;
    }    
    
    removeUser(email: string): void {
        delete this.activeUsers[email];
    }

    getUserConnection(email: string) {
        if (this.activeUsers[email]) {
            return this.activeUsers[email]
        } else {
            throw new Error('User with email ' + email + ' is not currently connected.');
        }

    }

}