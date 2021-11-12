const express = require("express");

const app = express();
//ROTA PARA PAGINA GERETE FINANCEIRO
app.get("/", function(req,res){
    res.send("Gerenciador Fineceiro");

});

//ROTA PARA PAGINA  DE CONTATO
app.get("/contato", function(req,res){
     res.send("Página de Contato");
});

//ROTA PARA PAGINA EMPRESA
app.get("/sobre empresa", function(req,res){
    res.send("Página Sobre Empresa");
});

//ROTA PARA PAGINA BLOG
app.get("/blog", function(req,res){
    res.send("Página Blog");
});


//localhost porta (8080)
app.listen(8080);