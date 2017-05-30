import User from '../model/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

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

    // create jwt
    let token = await jwt.sign({
        id: user.id,
        username: user.username
    }, config('token.secret'), {
        expiresIn: config('token.expires')
    });

    ctx.body = {
        token
    };
};
