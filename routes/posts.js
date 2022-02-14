const express=require('express');
const router= express.Router();
const posts_controller =require('../controllers/posts_controller');

router.get('/p1',posts_controller.post);



module.exports=router;

