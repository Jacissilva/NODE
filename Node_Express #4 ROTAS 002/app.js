const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendfile(__dirname + "/src/index.html");
   
});

app.get("/estoque", function(req, res){
    res.sendfile(__dirname + "/src/estoque.html");
   
});

//app.get("/", function(req, res){
//    res.send("Gerendicador de Estoque");    
//});

app.get("/Blog", function(req, res){
    res.send("Pagina de Blog");
})

app.get("/Sobre", function(req, res){
    res.sendfile(__dirname + "/src/sobre.html")
})

app.get("/contato", function(req, res){
    res.send("Pagina de Fale contato");
})
//Porta Localhost:8080
app.listen(8080);
