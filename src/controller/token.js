export const generate = ctx => {
    console.log(ctx.request);
    ctx.body = ctx.request.body;
};
