import { Router } from '../../deps.ts';
import { Register, Login } from '../controllers/authController.ts';
import { RegisterValidation } from '../validations/registerValidation.ts';
import { LoginValidation } from '../validations/loginValidation.ts';

const router = new Router();

router
    .post('/api/register', RegisterValidation, Register)
    .post('/api/login', LoginValidation, Login);


/*example of http get endpoint
    .get('/', (context) => {
        context.response.body = 'Это моя первая программа в Deno.'
    })
    .get('/Personas', ({response}) => {
        response.body = 'Персоны Конечная точка.'
    })
*/


export default router;