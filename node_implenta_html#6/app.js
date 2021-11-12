const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/sobre-empresa", function(req,res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.listen(8080);