import './init/database';
import Koa from 'koa';
import Router from 'koa-router';
import JsonBody from 'koa-json-body';
import ErrorMiddleware from './middleware/error';
import TokenMiddleware from './middleware/token';
import { handle } from './controller';

const app = new Koa();
const router = new Router();

app.use(ErrorMiddleware());
app.use(TokenMiddleware());
app.use(JsonBody({
    strict: true
}));

router.post('/token', handle('token@generate'));
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
