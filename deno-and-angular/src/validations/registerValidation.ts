import {
    type RouterMiddleware,
    validate,
    required,
    isEmail, 
    isString, 
    isIn
} from '../../deps.ts';

export const RegisterValidation:
    RouterMiddleware<any> = 
        async ({request, response}, next: Function) => 
{
    const body = await request.body().value;

    const [passes, errors] = await validate(body, {
        first_name: [required, isString],
        last_name: [required, isString],
        email: [required, isEmail],
        password: [required, isString],
        password_confirm: [required, isString, isIn([body.password])],
    })

    if (!passes) {
        response.status = 400;
        response.body = errors;
        return;
    }

    await next();
}