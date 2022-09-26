// bring in the recipe.service that knows how to talk to the model and get all the recipes
const RecipeService = require('../services/recipe.service.js');

exports.getRecipes = async function (req, res, next) {

    try {

        //call getRecipes on our service with {} as our query to get all the recipes
        var recipes = await RecipeService.getRecipes({})

        // Return the recipes list with the appropriate 
        //HTTP Status Code and Message.

        return res.status(200).json(recipes);

    } catch (e) {

        //Return an Error Response Message 
        //with Code and the Error Message.
        return res.status(400).json({ message: e.message });

    }
}