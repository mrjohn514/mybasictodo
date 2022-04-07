const express = require('express');
const port=8000;
const app= express();
const expresslayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

//addint static files
app.use(express.static('./assets'));


/*here we to require layout before routes becaues routes have views which are rendered 
so before that we have to tell all views belong to some sort of a layout or
 */

app.use(expresslayouts);  


//extracting styles and scripts from subpages to layouts
app.set('layout extractStyles',true);
app.set('layout extractscripts',true);


/// here we are using express router and now get post will handle by this moudle now
app.use('/',require('./routes/index'));

//setting up viewengine ejs

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err)
    {
        console.log(`hey getting error ${err}`);
        return;
    }

    console.log(`hey boy server is up and runing at ${port}`);
})
