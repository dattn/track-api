import jwt from 'jsonwebtoken';
import config from './config';

export const create = data => {
    return new Promise((resolve, reject) => {
        jwt.sign(data, config('token.secret'), {
            expiresIn: config('token.expires')
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
};

export const verify = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config('token.secret'), (err, decoded) => {
            if (err) {
                err.status = 403;
                err.publicMessage = 'Invalid Token';
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
};
