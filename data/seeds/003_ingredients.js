
exports.seed = function(knex, Promise) {
      return knex('ingredients').insert([
          {ingredient_name: 'pounds skin-on, bone-in chicken quarters'},
          {ingredient_name: 'salt'},
          {ingredient_name: 'pepper '},
          {ingredient_name: 'lemon'},
          {ingredient_name: 'olive oil'},
          {ingredient_name: 'fingerling potatoes'},
          {ingredient_name: 'radishes'},
          {ingredient_name: 'scallions'},
          {ingredient_name: 'baby carrots'},
          {ingredient_name: 'chopped fresh dill'},
          {ingredient_name: 'medium carrots'},
          {ingredient_name: 'red potatoes'},
          {ingredient_name: 'whole chicken'},
          {ingredient_name: 'garlic cloves'},
          {ingredient_name: 'petite frozen peas'},
          {ingredient_name: 'spinach'}
      ]);
};
