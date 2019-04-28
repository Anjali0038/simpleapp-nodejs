const express=require("express");
const mongoose =require('mongoose');
const methodOverride=require('method-override');
const app=express();
const port= process.env.PORT ||3000;
const Db="mongodb+srv://anjali-anjali:!l@jn@123@cluster0-e4l5e.mongodb.net/test?retryWrites=true"
mongoose.connect(Db,({useNewUrlParser:true}))
.then(console.log("connected to the mongodb database"))
// app.get("/",(req,res)=>
// {
//     res.send("this is the index page");
// })

// });
//task1
// app.get("/",(req,res)=>
// {
//     res.send("<a href='/about'> About</a>");
// });



// app.get("/about",(req,res)=>{
//     res.send("Anjali");
// });
// app.get("/",(req,res)=>
// {
//     res.send("<h1>this is the index page</h1>");
// });



// creating the server
 
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
const routes=require('./routes');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));


app.use ('/',routes);

app.listen(port, ()  =>  {
    console.log("server is created...")
});
