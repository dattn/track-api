import User from '../model/user';
import bcrypt from 'bcrypt';

export const generate = async ctx => {
    // get user from database
    let [ user ] = await User
        .query()
        .where('username', ctx.request.body.username);
    if (!user) {
        return;
    }

    // validate password
    if (! await bcrypt.compare(ctx.request.body.password, user.password)) {
        return;
    }

    ctx.body = user;
};
