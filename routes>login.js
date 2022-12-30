const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const userController = require('../controller/userController');

const router = express.Router();


router.get("/login",(req,res,next)=>{
    //console.log("login page...");
    //res.sendFile(path.join(__dirname,'..','views','register.html'))
    res.sendFile(path.join(__dirname,'..','views','login.html'));
  });

router.post('/login',userController.user_login);

function middleware(req,res,next){
  const getToken = localStorage.getItem('token');
  try
  {
    jwt.verify(getToken, 'secret-key');
    //res.send(console.log("login success das"));
    next();
  }catch(error)
  {
    console.log("login first");
    res.send("<h1>login first....</h1>");
  }
}

router.get("/addProduct",middleware,(req,res,next)=>{
  console.log("login success..")
  res.sendFile(path.join(__dirname,'..','views','addProduct.html'));
});


module.exports =  router;
