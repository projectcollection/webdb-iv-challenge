
exports.seed = function(knex, Promise) {
      return knex('recipe_ingredients').insert([
          {recipe_id: 1, ingredient_id: 1, amount: '3 1/2 pounds'},
          {recipe_id: 1, ingredient_id: 2, amount: ''},
          {recipe_id: 1, ingredient_id: 3, amount: ''},
          {recipe_id: 1, ingredient_id: 4, amount: '1'},
          {recipe_id: 1, ingredient_id: 5, amount: '3 tablespoons'},
          {recipe_id: 1, ingredient_id: 6, amount: '1 pound'},
          {recipe_id: 1, ingredient_id: 7, amount: '2 bunches'},
          {recipe_id: 1, ingredient_id: 8, amount: '1 bunch'},
          {recipe_id: 1, ingredient_id: 9, amount: '1 bunch'},
          {recipe_id: 1, ingredient_id: 10, amount: '1/4 cup'},

          {recipe_id: 2, ingredient_id: 11, amount: '4'},
          {recipe_id: 2, ingredient_id: 12, amount: '4'},
          {recipe_id: 2, ingredient_id: 7, amount: '1 cup'},
          {recipe_id: 2, ingredient_id: 5, amount: '1 tablespoon'},
          {recipe_id: 2, ingredient_id: 13, amount: '4-6 pound'},
          {recipe_id: 2, ingredient_id: 4, amount: '1'},
          {recipe_id: 2, ingredient_id: 14, amount: '2'},
          {recipe_id: 2, ingredient_id: 2, amount: ''},
          {recipe_id: 2, ingredient_id: 3, amount: ''},
          {recipe_id: 2, ingredient_id: 15, amount: '1 cup'},
          {recipe_id: 2, ingredient_id: 16, amount: '6-10 cups'},
      ]);
};
