const express = require('express')
const helmet = require('helmet')

const db = require('./data/dataAccessHelpers')

const app = express()

app.use(helmet())
app.use(express.json())

app.get('/dishes', async (req, res) => {
    try{
        const dishes = await db.getDishes()
        res.status(200).json(dishes)
    }catch (e) {
        res.status(500).json('server  error')
    }

})

app.get('/dishes/:id', async (req, res) => {
    const {id} = req.params
    try{
        const dishes = await db.getDish(id)
        res.status(200).json(dishes)
    }catch (e) {
        console.log(e)
        res.status(500).json('server  error')
    }
})

app.get('/recipes', async (req, res) => {
    try{
        const recipes = await db.getRecipes()
        res.status(200).json(recipes)
    }catch (e) {
        console.log(e)
        res.status(500).json('server  error')
    }
})

/**
 * basically the get shopping list
 */
app.get('/ingredients/:recipe_id', async (req, res) => {
    const {recipe_id} = req.params

    try{
        const ingredients = await db.getIngredients(recipe_id)
        if(ingredients.length === 0){
            res.status(404).json('recipe not found')
            return
        }
        res.status(201).json(ingredients)
    }catch (e) {
        console.log(e)
        res.status(500).json('server error')
    }
})

app.post('/dishes', async (req, res) => {
    const {name} = req.body
    if(!name){
        res.status(400).json('need a name for yo dish')
        return
    }
    try{
        const ids = await db.addDish(req.body)
        res.status(201).json(ids[0])
    }catch (e) {
        console.log(e)
        res.status(500).json('server  error')
    }
})

app.post('/recipes', async (req, res) => {
    const {recipe_name, dish_id} = req.body
    if(!recipe_name || !dish_id){
        res.status(400).json('incomplete data')
        return
    }
    try{
        const ids = await db.addRecipe(req.body)
        res.status(201).json(ids[0])
    }catch (e) {
        res.status(500).json('server error')
    }
})


const port = process.env.PORT || 5000
app.listen(port)
