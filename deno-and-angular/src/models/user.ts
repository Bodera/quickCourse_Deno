import {Model, Primary, Column} from '../../deps.ts'

// @Name - "Name" is what we called as a decorator.
// In TypeScript the !: could mean two things:
//  1º- definite assignment assertion
//  2º- non-null assertion operator

@Model('users')
export class User {
    @Primary()
    id!: number;

    @Column()
    first_name!: string;

    @Column()
    last_name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;
}