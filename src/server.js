const express = require('express');
const route = require('./route');
const path = require('path')

const server = express();

server.set("view engine", 'ejs');

server.use(express.static("public"));

server.set('views', path.join(__dirname, 'views'));
server.use(express.urlencoded({extended: true}));

server.use(route); //express, use file route

/*server.get("/", function(req,res){
    res.render("pages/index");
});*/

server.listen(8088, ()=> console.log("Running..."));