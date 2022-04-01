// @ts-ignore
import {Router} from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import { Register } from '../controllers/authController';

const router = new Router();

router
    .get('/', (context) => {
        context.response.body = 'Это моя первая программа в Deno.'
    })
    .get('/Personas', ({response}) => {
        response.body = 'Персоны Конечная точка.'
    })

export default router;