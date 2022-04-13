import {Application} from "./deps.ts";
// @ts-ignore
import router from "./routes/routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

// deno run --allow-net app.ts
app.listen({port: 9002});
console.log("Gomu Gomu No Middleware!");
