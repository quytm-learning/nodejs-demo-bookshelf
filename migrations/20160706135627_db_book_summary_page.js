
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('books', function (table) {
          table.increments('id').primary();
          table.string('name');
      }),
      knex.schema.createTable('summaries', function (table) {
          table.increments('id').primary();
          table.string('details');
          table.integer('book_id');
      }),
      knex.schema.createTable('pages', function (table) {
          table.increments('id').primary();
          table.string('content');
          table.integer('book_id');
      })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('books'),
      knex.schema.dropTable('summaries'),
      knex.schema.dropTable('pages')
  ])
};




// exports.up = function(knex, Promise) {
//     return knex.schema.createTable('books', function (table) {
//             table.increments('id').primary();
//             table.string('name');
//         }).createTable('summaries', function (table) {
//             table.increments('id').primary();
//             table.string('details');
//         }).createTable('pages', function (table) {
//             table.increments('id').primary();
//             table.string('content');
//         })
// };
//
// exports.down = function(knex, Promise) {
//     return knex.schema.dropTable('books').dropTable('summaries').dropTable('pages')
// };
