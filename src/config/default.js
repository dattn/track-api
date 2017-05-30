import uuid from 'uuid/v4';

export default {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        name: process.env.DB_NAME
    },
    token: {
        secret: uuid(),
        expires: '15m'
    }
};
