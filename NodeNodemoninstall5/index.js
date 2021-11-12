const express = require("express");

const app = express();

app.get("/", function(req,res){
   res.send("Gerenciador Estoque");
});

app.get("/contato", function(req,res){
   res.send("Pagina de Contato");
});

app.get("/estoque", function(req,res){
   res.send("Pagina de Estoque");
});

app.get("/Blog", function(req,res){
   res.send("Pagina Blog");
});

app.listen(8080);