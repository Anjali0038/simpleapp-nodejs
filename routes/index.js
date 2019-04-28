const Router =require ("express").Router();
const indexController=require("../controllers/index.js");
Router.get("/",indexController.showindex);
Router.get("/anjali",indexController.datashow);
Router.get("/form",indexController.formshow);
Router.post("/form",indexController.formSubmit);
Router.delete("/form/:id",indexController.deleteGoal);
module.exports=Router;