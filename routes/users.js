const express= require('express');

const router=express.Router();
const users_controller=require('../controllers/users_controller');
const post_controller=require('../controllers/posts_controller');


router.get('/profile',users_controller.profile)

router.get('/posts',post_controller.post);

module.exports=router;