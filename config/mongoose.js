//require library
const mongoose = require('mongoose');

//connext to the database
mongoose.connect('mongodb://localhost/todo_development');

//acquire the connection to check it is succesful or not
const db=mongoose.connection;

//if there is error handle error
db.on('error',console.error.bind(console,"connection error"));

//if succes then hurray running
db.once('open', function(){
    console.log("bsdk db has connected")
})