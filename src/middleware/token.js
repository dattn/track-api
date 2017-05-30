import * as Token from '../token';

export default () => async (ctx, next) => {
    if (ctx.request.header.authorization) {
        const [ type, token ] = ctx.request.header.authorization.split(' ', 2);
        if (token && type === 'Bearer') {
            ctx.token = await Token.verify(token);
        }
    }
    await next();
};
