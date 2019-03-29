
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        {recipe_name: 'simple chicken', dish_id: 1, instructions: 'Preheat the oven to 500 degrees F. Rinse the chicken and pat dry. Season with salt and pepper, then place skin-side up on a rimmed baking sheet. Squeeze 1/2 lemon over the chicken and drizzle with 1 tablespoon olive oil. Roast 15 minutes. Meanwhile, cut the potatoes and radishes in half and cut the scallions into thirds. Toss the potatoes, radishes, carrots and the remaining 2 tablespoons olive oil in a bowl; season with salt and pepper. Remove the chicken from the oven and scatter the vegetables around it. Continue to roast until the vegetables are tender and the chicken is golden and cooked through, about 20 more minutes. Squeeze the remaining 1/2 lemon over the chicken and vegetables. Top with the dill and season with salt. '},
        {recipe_name: 'fancy chicken', dish_id: 1, instructions: 'Preheat the oven to 350 degrees.\n' +
                'Prep the potatoes by dicing them into small chunks, and prep the carrots by slicing them into sticks. Quarter the radishes after removing the greens and cutting off the skinny root end. Toss the vegetables with 1 tablespoon olive oil in the bottom of a 13x9 roasting pan.\n' +
                'Prepare the chicken by removing giblets if necessary and stuffing 1 sliced lemon into the cavity. Place the chicken breast side up in the roasting pan on top of the vegetables, and use a piece of kitchen twine to tie the drumsticks together.\n' +
                'Finely mince 2 garlic cloves and spread the garlic on top of the chicken skin. Drizzle with olive oil, salt, and pepper, and rub everything into the skin of the chicken.\n' +
                'Roast chicken for 20 minutes per pound plus an additional 15 minutes. Attempt to stir the vegetables once or twice during cooking. My 4 lb chicken roasted for about 1 hour and 40 minutes (until my meat thermometer read 165 degrees), but timing will depend on the weight and type of the chicken you purchase.\n' +
                'Add the petite peas on top of the other vegetables at least 20 minutes before the end of cooking time.\n' +
                'After checking that the chicken is fully cooked, remove the chicken to a cutting board and allow it to rest for 10 minutes. Transfer vegetables into a serving bowl using a slotted spoon, to allow excess chicken grease to drain.\n' +
                'Slice chicken and serve the chicken and veggies over a bed of fresh spinach.'},
      ]);
};
