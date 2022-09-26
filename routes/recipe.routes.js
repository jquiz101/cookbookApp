// import express and express router so we can create routes for our recipe
const express = require('express');
const router = express.Router();

// bringing in the reciple controller since it has the business logic and will respond to the route
const RecipeController = require('../controllers/recipe.controller')

router.get('/', RecipeController.getRecipes)

module.exports = router;