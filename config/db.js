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


var knex2 = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'sakila',
        charset: 'utf8'
    }
});

var Bookshelf = require('bookshelf')(knex2);
Bookshelf.plugin('registry');

module.exports.db_bookshelf     = require('bookshelf')(knex);
module.exports.db_sakila        = Bookshelf;