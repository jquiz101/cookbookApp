// bringing in mongoose so we can use it to create our schema that represents a recipe
const mongoose = require('mongoose')

// schema - this is what the data might look like
const recipeSchema = new mongoose.Schema({
    name: String,
    author: {
        name: String,
        email: String
    },
    ingredients: [String],
    averageCost: [String]
})

// creates that actual model to work with based on the above schema
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe;