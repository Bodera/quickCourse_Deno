// You'll need this type import
import { type RouterMiddleware}  from "../deps.ts";

// New version of oak no longer uses RouterContext, it uses RouterMiddleware
export const Register: 
    RouterMiddleware<string> = 
        async ({ request, response }) => 
{
    /*
    whatever we put in the body request, we get back in the body of the response!    
    const body = await request.body().value;
    response.body = body;
    */

    const body = await request.body().value;
    /* moved to registerValidation.ts
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

    //console.log({passes, errors});
    */
    response.body = body;
}
