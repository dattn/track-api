import User from '../model/user';

export const generate = async ctx => {
    let [ user ] = await User
        .query()
        .where('username', ctx.request.body.username);
    if (user) {
        ctx.body = user;
    }
};
