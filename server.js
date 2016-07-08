/**
 * Created by tmq on 03/07/2016.
 */

var express = require('express');
var config = require('./knexfile');
var env = 'development';
var knex = require('knex')(config[env]);
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
// app.use()

require('./router')(app);

app.listen(3000, function () {
    console.log('Start server!');
});
