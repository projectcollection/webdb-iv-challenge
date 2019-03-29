const db = require('./db')

const dishes = 'dishes'
const recipes = 'recipes'
const recipe_ingredients = 'recipe_ingredients'

/**
 * returns all available dishes
 * @resolve [{id: int, name: string}]
 */
const getDishes = () => {
    return db(dishes)
}

/**
 * @param dishData
 * @resolve [id]
 */
const addDish = (dishData) => {
    return db(dishes).insert(dishData)
}

/**
 *
 * @param id
 * @resolve {id: int, name: string, recipes_ids:[]}
 */
const getDish = (id) => {
    return db(dishes).join(recipes, 'recipes.dish_id', '=', 'dishes.id')
        .where({'dishes.id': id}).then(joined => {
            return joined.reduce((returnObj, item) => {
                return {
                    ...returnObj,
                    recipes_ids: [...returnObj.recipes_ids, item.id]
                }
            }, {id: joined[0].dish_id,
                name: joined[0].name,
                recipes_ids: []} )
        })
}

/**
 *
 * @resolve [{id: int, recipe_name: string, dish_id: int, instructions: string, name: string (dish name)}]
 */
const getRecipes = () => {
    return db(recipes).join(dishes, 'dishes.id', '=', 'recipes.dish_id')
}

/**
 *
 * @param recipeData
 * @resolve [id]
 */
const addRecipe = (recipeData) => {
    return db(recipes).insert(recipeData)
}

/**
 *
 * @param recipe_id
 * @resolve [{id: int, recipe_id: int, ingredient_id: int, amount: string, ingredient_name: string}]
 */
const getIngredients = (recipe_id) => {
    return db(recipe_ingredients).join('ingredients', 'ingredients.id', '=', `recipe_ingredients.ingredient_id`)
        .where({recipe_id: recipe_id})
}
module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
    getIngredients
}