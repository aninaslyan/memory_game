const Router = require('koa-router');
const router = new Router();

const userCtr = require("../controlers/user");

router.get('/:id/score',async function (ctx, next) {
    console.log('users',ctx.params.id);
    userCtr.score(ctx.params.id);
    ctx.response.body = "Hello World";
});

router.use('/users',router.routes());
module.exports = router;