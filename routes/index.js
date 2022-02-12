const express = require('express');
const home = require('../controllers/home_controller');

const router = express.Router();

console.log("yes now on route will handle")


//here we are requiring homecontroller.js so that we can use the exprted funciton in it
const homecontroler=require('../controllers/home_controller');


router.get('/',homecontroler.home);


module.exports=router;