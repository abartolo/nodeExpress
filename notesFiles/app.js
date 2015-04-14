/**
 * Created by Alex on 4/13/2015.
 */
var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("<h1>Home Page</h1>");
});

app.get("/about",function(req,res){
    res.send("<h1>About Us</h1>");
});
app.get("/about/:title",function(req,res){
    res.send("<h1>"+req.params.title+"</h1>");
});

app.listen(3000);
console.log("Server started! Listening on port 3000");