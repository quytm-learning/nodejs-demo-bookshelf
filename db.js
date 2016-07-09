/**
 * Created by tmq on 07/07/2016.
 */

var Model = require('./models/Models');

// =============================== Bookshelf ===========================================================================

// fetchAll() -> return all rows in table books
module.exports.f_fetchAll = function (req, res) {
    new Model.Book()
        .fetchAll()
        .then(function (books) {
            res.json(books);
        })
        .catch(function (err) {
            console.log(err);
            res.send('Error');
        })
};

// fetch() -> return first row in table books
module.exports.f_fetch = function (req, res) {
    new Model.Book()
        .fetch()
        .then(function (books) {
            res.json(books);
        })
        .catch(function (err) {
            console.log(err);
            res.send('Error');
        })
};

// where()
module.exports.f_where = function (req, res) {
    new Model.Book()
        .where('id', 2)
        .fetch()
        .then(function (books) {
            res.json(books);
        })
        .catch(function (err) {
            console.log(err);
            res.send('Error');
        })
};

// related -> All pages have book_id = id = 1 (book: The Lord of Rings)
module.exports.f_related = function (req, res) {
    new Model.Book()
        .where('id', 1)
        .fetch({ withRelated: ['pages']})
        .then(function (books) {
            res.json(books.related('pages'));
        })
        .catch(function (err) {
            console.log(err);
            res.send('Error');
        })
};

// // related -> All pages have book_id = id = 1 (book: The Lord of Rings) -> Use query
// module.exports.f_related = function (req, res) {
//     new Model.Book()
//         .query({ where: {'id': 1}})
//         .fetch({ withRelated: ['pages']})
//         .then(function (books) {
//             res.json(books.related('pages'));
//         })
//         .catch(function (err) {
//             console.log(err);
//             res.send('Error');
//         })
// };

// save -> insert data
module.exports.f_insert = function (req, res) {
    new Model.Book({
        name: 'Book insert'
    })
        .save()
        .then(function (model) {
            res.json(model)
        })
        .catch(function (err) {
            console.log(err);
            res.send('Error');
        })
};
// save -> update data
module.exports.f_update = function (req, res) {
    new Model.Book({
        // name: 'Book',
        id : 2
    })
        .save({name: 'Book update'})
        .then(function (model) {
            res.json(model)
        })
        .catch(function (err) {
            console.log(err);
            res.send('Error');
        })
};

// destroy data
module.exports.f_destroy = function (req, res) {
    new Model.Book()
        .where({name: 'Book update dsasdf'})
        .destroy()
        .then(function (model) {
            res.json(model)
        })
        .catch(function (err) {
            console.log(err);
            res.send('Error');
        })
};


// ============================== Sakila ===============================================================================

// Get all customer
module.exports.all_customer = function (req, res) {
    new Model.Customer()
        .fetchAll()
        .then(function (customers) {
            res.json(customers);
        })
        .catch(function (err) {
            res.send('Error');
            console.log(err);
        })
};

module.exports.all_rental = function (req, res) {
    new Model.Customer()
        .fetch()
        .then(function (rentals) {
            res.json(rentals);
        })
        .catch(function (err) {
            res.send('Error');
            console.log(err);
        })
};

// module.exports.customer_related_rental = function (req, res) {
//     new Model.Customer()
//         // .where({
//         //     'customer_id': 1
//         // })
//         .fetch(
//             {withRelated: ['rental']}
//         )
//         .then(function (customers) {
//             // res.json(customers);
//             res.json(customers.related('rental'));
//         })
//         .catch(function (err) {
//             console.log(err);
//             res.send('Error');
//         })
// };

module.exports.customer_related_rental = function (req, res) {
    new Model.Customer()
        .query(function (qb) {
            qb.innerJoin('rental', 'customer.customer_id', 'rental.customer_id');
            // qb.groupBy('customer.customer_id');
            qb.where('customer.customer_id', '=', '1');
        })
        .fetchAll(
            {columns: ['customer.customer_id','first_name']}
        )
        .then(function (customers) {
            res.json(customers);
            // res.json(customers.related('rental'));
        })
        .catch(function (err) {
            console.log(err);
            res.send('Error');
        })
};

