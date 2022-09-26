const Recipe = require('../models/recipe.model.js')

// Let's use an Async function to get the Recipes
exports.getRecipes = async function (query) {

    //Let's create a Try and Catch function 
    //that way we have some error handling set. 
    //Waiting for the promise

    try {

        //using await to make sure the async call is complete before running the next line of code
        var recipes = await Recipe.find(query)

        //Once the Mongoose promise is returned 
        //we're going to go ahead and return 
        //the To Do List it has produced 

        return recipes;

    } catch (e) {

        //If the try didn't work we're going to 
        //go ahead and let the users know what kind of 
        //Error we have

        throw Error('Oh No! We got an error while finding your recipes, so sorry!')
    }


}