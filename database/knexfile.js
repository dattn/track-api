module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host:     '127.0.0.1',
            database: 'track',
            user:     'root',
            password: 'root',
            charset:  'utf8mb4'
        },
        migrations: {
            tableName: 'migrations'
        }
    }
};
