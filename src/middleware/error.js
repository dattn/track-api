export default () => async (ctx, next) => {
    const startTime = Date.now();
    try {
        await next();
    } catch (err) {
        const debug = (process.env.NODE_ENV || 'development') === 'development';
        if (debug) {
            console.error(err);
        }
        return new Promise(resolve => {
            setTimeout(() => {
                ctx.body = {
                    error: debug
                        ? err.message
                        : err.publicMessage || 'Unexpected Error'
                };
                ctx.status = err.status || 500;
                resolve();
            }, 1000 - Date.now() + startTime);
        });
    }
};
