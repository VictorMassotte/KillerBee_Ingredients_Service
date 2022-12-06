class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const userProcess = require('../controllers/ingredients.constroller');
    new userProcess(this.app);
   }
  }
  
  module.exports = Module;