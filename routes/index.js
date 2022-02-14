const express = require('express');
const home_controller = require('../controllers/home_controller'); 
const router = express.Router();

console.log("yes now on route will handle")



router.get('/',home_controller.home);
/*we are considering this file as the roots of all routes so we want this index route to 
control the all other routes 
*/

router.use('/users',require('./users'));


module.exports=router;






/* 1 first request goes to main index.js
   2 where app.use() came where any url after localhost:8000 is map to require routes folder 
   3 app.use('/')  this single slash means any url after localhost:8000
   4 it goes to routes/idex.js 
   5  where request to  '/' mapped/goes to  homecontroler
   6  also request to '/users' will require userroute file containing usercontroler
   7 where any request to '/profile' mapped to uesr controller 

   */