import { Application } from '../deps.ts';
import router from './routes/routes.ts';
import { connection } from './database/connection.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

// deno run --allow-net app.ts
app.listen({port: 9002});
console.log("Gomu Gomu No Middleware!");

//await connection.disconnect();