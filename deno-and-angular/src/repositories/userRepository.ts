import { User } from "../models/user.ts";
import { manager } from "../database/connection.ts";

export class UserRepository {
    async create(user: User) {
        return manager.save(user);
    }

    async find(key: string, value: string) {
        return manager.query(User).where(key, value).first();
    }
}