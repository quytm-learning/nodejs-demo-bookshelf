/**
 * Created by tmq on 24/07/2016.
 */

require('./Customer');

var sakila = require('../config/db').db_sakila;
var Address = sakila.Model.extend({
    tableName: 'address',
    customer: function () {
        return this.hasOne('Customer', 'address_id');
    }
});

module.exports = sakila.model('Address', Address);