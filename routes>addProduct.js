const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

//const adminControllerEmail = require('../controller/adminEmailVerify');
const addProductController = require('../controller/addProductController');

const router = express.Router();




// router.get('/',(req,res)=>{
//   //console.log("destination:",upload);
//   //res.sendFile(path.join(__dirname,'..','views','register.html'))
//   res.sendFile(path.join(__dirname,'..','views','register.html'));
// });

if(typeof localStorage ==="undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

//
router.get('/logout',(req,res)=>{
    localStorage.removeItem('token');
  res.sendFile(path.join(__dirname,'..','views','login.html'));
});

//
router.post('/addP', addProductController.addProduct);

//
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
      res.send("<h1>login first...</h1>");
    }
  }

router.get('/productDetails',middleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','productDetails.html'));
});

//
router.get('/addP',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','addProduct.html'));
});

//
router.post('/productDetails', addProductController.productDetails);

module.exports =  router;
