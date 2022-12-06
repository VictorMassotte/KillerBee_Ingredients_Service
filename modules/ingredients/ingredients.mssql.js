const mssqlcon = require('../../database/index');

class processMSSql {

    async getAllIngredients(){
        const con = await mssqlcon.getConnection();
        const res = await con.request().query('SELECT * FROM ingredients');

        return res.recordset;
    }

    async getIngredientById(id){
        const con = await mssqlcon.getConnection();
        const res = await con.request().input('id', id).query('SELECT * FROM ingredients WHERE id = @id');
        return res.recordset;
    }

    async addIngredient(prod) {
        console.log(prod);
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("name", prod.name)
        .input("description", prod.description)
        .execute("dbo.InsertIngredient");
        return res;
    }

    async updateIngredient(id, prod) {
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("id", id)
        .input("name", prod.name)
        .input("description", prod.description)
        .execute("dbo.UpdateIngredient");
        return res;
      }

      async deleteIngredient(id) {
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("id", id)
        .execute("dbo.DeleteIngredient");
        return res;
      }
 
}

module.exports = new processMSSql();