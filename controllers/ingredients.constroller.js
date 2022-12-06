const ingredients = require('../routes/router')
const express = require('express');
const router = express.Router();

class ingredientsController {
    constructor(app) {
        router.get('/', ingredients.getAllIngredients);
        router.get('/:id', ingredients.getIngredientById);
        router.post('/', ingredients.addIngredient);
        router.put('/:id', ingredients.updateIngredient);
        router.delete('/:id', ingredients.deleteIngredient);
      
      app.use('/api/v1/ingredients', router);
    }
 }
module.exports = ingredientsController;