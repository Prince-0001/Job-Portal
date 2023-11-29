const mongoose = require("mongoose");

var mongoURL = 'mongodb://127.0.0.1:27017/mydatabase';

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection ;

db.on('connected',()=>{
    console.log("mongodb is connect");
})

db.on('error',()=>{
    console.log("not connected");


})

module.exports = mongoose ;