const express = require('express');
const port=8000;
const app= express();

/// here we are using express router and now get post will handle by this moudle now
app.use('/',require('./routes/index'));

//setting up viewengine ejs

app.use('view engine','ejs');
app.use('views','./views');

app.listen(port,function(err){
    if(err)
    {
        console.log(`hey getting error ${err}`);
        return;
    }

    console.log(`hey boy server is up and runing at ${port}`);
})
