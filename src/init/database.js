import { Model } from 'objection';
import Knex from 'knex';

const knex = Knex({
    client: 'mysql2',
    connection: {
        host:     '127.0.0.1',
        database: 'track',
        user:     'root',
        password: 'root',
        charset:  'utf8mb4'
    }
});

Model.knex(knex);
