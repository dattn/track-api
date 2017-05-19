exports.up = knex => {
    return knex.schema.createTable('user', table => {
        table.increments('id').unsigned().primary();
        table.string('username', 50).unique().notNull();
        table.text('password').notNull();
    });
};

exports.down = knex => {
    return knex.dropTable('user');
};
