// @ts-ignore
import {Application} from 'https://deno.land/x/oak@v10.5.1/mod.ts';
// @ts-ignore
import router from "./routes/routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 9002});

// deno run --allow-net app.ts
console.log('Gomu Gomu No Middleware!');
