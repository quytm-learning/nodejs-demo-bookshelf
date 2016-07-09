/**
 * Created by tmq on 07/07/2016.
 */

var db = require('./db');
var fs = require('fs');


module.exports = function (app) {

    app.get('/', function(req, res) {
        fs.createReadStream('./views/index.html').pipe(res);
    });

    app.get('/fetchAll',    db.f_fetchAll);
    app.get('/fetch',       db.f_fetch);
    app.get('/where',       db.f_where);
    app.get('/related',     db.f_related);
    app.get('/insert',      db.f_insert);
    app.get('/update',      db.f_update);
    app.get('/destroy',      db.f_destroy);

    app.get('/allcustomers',    db.all_customer);
    app.get('/allrentals',    db.all_rental);
    app.get('/customerrelatedrental',    db.customer_related_rental);
    
};