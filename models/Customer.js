/**
 * Created by tmq on 24/07/2016.
 */


require('./Address');
require('./Rental');

var sakila = require('../config/db').db_sakila;

var Customer = sakila.Model.extend({
    tableName: 'customer',
    address: function () {
        return this.belongsTo('Address', 'address_id');
    },
    // store: function () {
    //     return this.hasOne(Store);
    // },

    // rental: function () {
    //     return this.hasMany('Rental', 'customer_id');
    // }

    // payment: function () {
    //     return this.belongsToMany(Payment);
    // }
});

module.exports = sakila.model('Customer', Customer);
