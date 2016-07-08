/**
 * Created by tmq on 03/07/2016.
 */

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'bookshelf',
        charset: 'utf8'
    }
});

module.exports = require('bookshelf')(knex);