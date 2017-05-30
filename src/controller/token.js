import User from '../model/user';

export const generate = ctx => {
    return User
        .query()
        .where('username', ctx.request.body.username)
        .then(users => {
            if (users[0]) {
                ctx.body = users[0];
            }
        });
};
