const db = require('./db')

const dishes = 'dishes'
const recipes = 'recipes'
const recipe_ingredients = 'recipe_ingredients'

const getDishes = () => {
    return db(dishes)
}

const addDish = (dishData) => {
    return db(dishes).insert(dishData)
}

const getDish = (id) => {
    return db(dishes).join(recipes, 'recipes.dish_id', '=', 'dishes.id')
        .select('dishes.id', 'dishes.name', 'recipes.id')
        .where({'dishes.id': id})
}

const getRecipes = () => {
    return db(recipes).join(dishes, 'dishes.id', '=', 'recipes.dish_id')
}

const addRecipe = (recipeData) => {
    return db(recipes).insert(recipeData)
}

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
}