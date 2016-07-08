
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
      knex('books').del()
          .then(function () {
              return Promise.all([
                  knex('books').insert({
                      id: 1,
                      name: 'The Lord of Rings'
                  }),
                  knex('books').insert({
                      id: 2,
                      name: 'Evil'
                  })
              ]);
          }),
      knex('summaries').del()
          .then(function () {
              return Promise.all([
                  knex('summaries').insert({
                      id: 1,
                      details: 'Summary: The Lord of Rings',
                      book_id: 1
                  }),
                  knex('summaries').insert({
                      id: 2,
                      details: 'Summary: Evil',
                      book_id: 2
                  })
              ]);
          }),
      knex('pages').del()
          .then(function () {
              return Promise.all([
                  knex('pages').insert({
                      id: 1,
                      content: 'Page 1 - The Lord of Rings',
                      book_id: 1
                  }),
                  knex('pages').insert({
                      id: 2,
                      content: 'Page 2 - The Lord of Rings',
                      book_id: 1
                  })
              ]);
          })
  ]);
};
