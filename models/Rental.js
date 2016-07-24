/**
 * Created by tmq on 24/07/2016.
 */


require('./Customer');

var sakila = require('../config/db').db_sakila;

module.exports.Rental = sakila.Model.extend({
    tableName: 'rental',
    customer: function () {
        return this.belongsTo('Customer', 'customer_id');
    }
    // payment: function () {
    //     return this.belongsTo(Payment);
    // }
});
