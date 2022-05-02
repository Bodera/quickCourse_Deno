import {
    type RouterMiddleware,
    validate,
    required,
    isEmail, 
    isString, 
    isIn
} from '../../deps.ts';

export const LoginValidation:
RouterMiddleware<any> = 
async ({request, response}, next: Function) => 
{
    
    const body = await request.body().value;

    const [passes, errors] = await validate(body, {
        email: [required, isEmail],
        password: [required, isString]
    });

    if (!passes) {
        response.status = 400;
        response.body = errors;
        return;
    }


    await next();
}