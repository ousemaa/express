const express= require("express");
const users = require("../UserList");
const userRouter=express.Router();

//get user 
userRouter.get("/",(req,res)=>res.send({listuser:users})); 

userRouter.post("/login",(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    res.send(`My email is ${email} and my password is ${password}`);
});

//update user 
userRouter.get("/boutique",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
   
    if(hours>9 && hours<17){
        res.render("opened");
     
    }
    else{
        res.render("closed");
    
    }
});
//add user 

module.exports=userRouter;
