const processMySQL = require('../modules/ingredients/ingredients.mssql');

class ingredients {

    async getAllIngredients(req, res) {
        try {
            const output = await processMySQL.getAllIngredients();
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async getIngredientById(req, res) {
        try {
            const output = await processMySQL.getIngredientById(req.params.id);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async addIngredient(req, res) {
        try {
            const output = await processMySQL.addIngredient(req.body);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async updateIngredient(req, res) {
        try {
            const output = await processMySQL.updateIngredient(req.params.id, req.body);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async deleteIngredient(req, res) {
        try {
            const output = await processMySQL.deleteIngredient(req.params.id);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ingredients();