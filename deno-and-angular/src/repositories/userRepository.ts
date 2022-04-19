import { User } from "../models/user.ts";
import { manager } from "../database/connection.ts";

export class UserReporitory {
    async create(user: User) {
        return manager.save(user);
    }
}