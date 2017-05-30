import { Model } from 'objection';
import Knex from 'knex';
import config from '../config';

const knex = Knex({
    client: 'mysql2',
    connection: {
        host:     config('db.host'),
        database: config('db.name'),
        user:     config('db.user'),
        password: config('db.pass'),
        charset:  'utf8mb4'
    }
});

Model.knex(knex);
