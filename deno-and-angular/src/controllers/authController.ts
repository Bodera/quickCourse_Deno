import { type RouterMiddleware, hash, variant, version } from '../../deps.ts';
import { User } from '../models/user.ts';
import { UserRepository } from '../repositories/userRepository.ts';

const encoder = new TextEncoder();
const encode = (str: string) => encoder.encode(str);
const hex = (arr: Uint8Array) => arr.reduce((m, i) => m + ("0" + i.toString(16)).slice(-2), "");

export const Register:
RouterMiddleware<string> =
  async ({ request, response }) => {
    try {
      const body = await request.body().value;

      const password = encode(body.password);
      const salt = encode("соль");
      const userPassword = hex(hash(password, salt, {
        variant: variant.argon2id,
        version: version.V0x13,
        t: 2,
        m: 65536,
        p: 1,
      }));

      const user = new User();
      user.first_name = body.first_name;
      user.last_name = body.last_name;
      user.email = body.email;
      user.password = userPassword;

      const userRepository = new UserRepository();
      response.body = await userRepository.create(user);

      console.log(user);

    } catch (e) {
      console.log(e);
      response.status = 400;
    }
  }

export const Login:
RouterMiddleware<string> =
  async ({ request, response }) => {
    try {
      const {email, password} = await request.body().value;

      const userRepository = new UserRepository();
      const user = await userRepository.find('email', email);

      if (!user) {
        response.status = 404;
        response.body = {
          message: 'User not found!'
        }
        return;
      }

      const passwordProvided = encode(password);
      const salt = encode("соль");
      const userPassword = hex(hash(passwordProvided, salt, {
        variant: variant.argon2id,
        version: version.V0x13,
        t: 2,
        m: 65536,
        p: 1,
      }));

      console.log(user.password)
      console.log(userPassword)

      if (user.password !== userPassword) {
        response.status = 401;
        response.body = {
          message: 'Incorrect password!'
        }
        return;
      }

      response.body = user;
      console.log(user);

  } catch (e) {
    console.log(e);
    response.status = 400;
  }

}
