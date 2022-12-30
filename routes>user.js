const express = require('express');
const path = require('path');
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })


//const adminControllerEmail = require('../controller/adminEmailVerify');
const userController = require('../controller/userController');


const router = express.Router();




router.get('/',(req,res)=>{
  //console.log("destination:",upload);
  //res.sendFile(path.join(__dirname,'..','views','register.html'))
  res.sendFile(path.join(__dirname,'..','views','register.html'));
});



//following to insert
router.post('/', userController.add_user);

//following email exists
router.post('/register', userController.email_exists);

module.exports =  router;
 
