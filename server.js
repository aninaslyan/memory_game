const Koa = require('koa');
const app = new Koa();



const userRout = require("./routers/userRouter");

app
    .use(userRout.routes())
 // .use(router.allowedMethods());


app.listen(3000);
