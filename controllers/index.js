const Goal=require("../models/Goal");
exports.showindex=async(req,res)=>{
    const goals=await Goal.find({});
    console.log(goals)
    res.render("index.ejs",{name:"Lustrous",goals:goals})
}

exports.datashow=(req,res)=>{
    res.render("index.ejs",{name:"Anjali"});
}
exports.formshow=(req,res)=>{
    res.render("form.ejs")
}

exports.formSubmit=(req,res)=>{
    let title=req.body.title;
    if (title==undefined|| title==""){
        res.send("you entered nothing")
    }
    const goal = new Goal({
        title:req.body.title
    });
    goal.save();
    res.redirect("/")
}

exports.deleteGoal=async(req,res)=>{
  await Goal.remove({_id:req.params.id});
  res.redirect("/")
}

