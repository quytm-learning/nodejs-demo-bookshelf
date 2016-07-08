/**
 * Created by tmq on 07/07/2016.
 */

var bookshelf = require('../config/db');

var Book = module.exports.Book = bookshelf.Model.extend({
    tableName: 'books',
    summary: function () {
        return this.hasOne(Summary, 'book_id');
    },
    pages: function () {
        // return this.hasMany(Page, 'book_id');
        return this.hasMany(Page);
    }
});

var Summary = module.exports.Summary = bookshelf.Model.extend({
    tableName: 'summaries',
    book: function () {
        return this.belongsTo(Book, 'book_id');
    }
});

var Page = module.exports.Page = bookshelf.Model.extend({
    tableName: 'pages',
    book: function () {
        // return this.belongsTo(Book, 'book_id');
        return this.belongsTo(Book);
    }
});