/**
 * Created by tmq on 07/07/2016.
 */

// Use database: bookshelf ---------------------------------------------------------------------------------------------
var bookshelf = require('../config/db').db_bookshelf;

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

// Use database: sakila ------------------------------------------------------------------------------------------------
// var sakila = require('../config/db').db_sakila;

// var Customer = module.exports.Customer = sakila.Model.extend({
//     tableName: 'customer',
//     address: function () {
//         return this.belongsTo(Address, 'address_id');
//     },
//     // store: function () {
//     //     return this.hasOne(Store);
//     // },
//     rental: function () {
//         return this.hasMany(Rental, 'customer_id');
//     }
//     // payment: function () {
//     //     return this.belongsToMany(Payment);
//     // }
// });
//
// var Rental = module.exports.Rental = sakila.Model.extend({
//     tableName: 'rental',
//     customer: function () {
//         return this.belongsTo(Customer, 'customer_id');
//     }
//     // payment: function () {
//     //     return this.belongsTo(Payment);
//     // }
// });
//
// var Address = module.exports.Address = sakila.Model.extend({
//     tableName: 'address',
//     customer: function () {
//         return this.hasOne(Customer, 'address_id');
//     }
// });


// Old Code
// var Payment = module.exports.Payment = sakila.Model.extend({
//     tableName: 'payment',
//     customer: function () {
//         return this.hasOne(Customer);
//     },
//     rental: function () {
//         return this.hasOne(Rental);
//     }
// });
//
// var Store = module.exports.Store = sakila.Model.extend({
//     tableName: 'store'
// });
//
// var Inventory = module.exports.Inventory = sakila.Model.extend({
//     tableName: 'inventory'
// });
//
// var Film = module.exports.Film = sakila.Model.extend({
//     tableName: 'film'
// });
//
//
// // Views in Sakila
// var FilmList = module.exports.FilmList = sakila.Model.extend({
//     tableName: 'film_list'
// });
//
// var CustomerList = module.exports.CustomerList = sakila.Model.extend({
//     tableName: 'customer_list'
// });