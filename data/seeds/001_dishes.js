
exports.seed = function(knex, Promise) {
      return knex('dishes').insert([
        {name: 'Simple roasted chicken with spring vegetables'},
      ]);
};
