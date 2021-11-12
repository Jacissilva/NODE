const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("./models/Artigo");
const Artigo = mongoose.model('artigo');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Acessou o MiddleWere !");
    //res.header("Access-Control-Allow-Origin", "http://localhost:8080/" ); ->> da permição para acesso para localhost.... //
    res.header("Access-Control-Allow-Origin", "*" );
    res.header("Access-Control-Allow-Origin", "GET,PUT,POST,DELETE" );
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost/celke', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

//  ROTA LISTAR DADOS CADASTRADOS PELA API
app.get("/", (req, res) => {
    //return res.json({titulo: "Como criar API 002"});
    Artigo.find({}).then((artigo) => {
        return res.json(artigo);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum artigo encontrado !"
        })
    }) 
});

// ROTA VISUALIZAR OS DADOS DO BANCO
app.get("/artigo/:id", (req, res) => {
    Artigo.findOne({_id: req.params.id}).then((artigo) => {
         return res.json(artigo);
        }).catch((erro) => {
            return res.status(400).json({
               error: true,
               message: "Nenhum artigo encontrado " 
            })
        })      
})

// ROTA CADASTRAR API NO BANCO DE DADOS.
app.post("/artigo", (req, res) => {
    const artigo = Artigo.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso!"
        });
    
        return res.status(200).json({
            error: false,
            message: "Artigo cadastrado com sucesso!"
        })
    });
});

// ROTA CRIAR UM EDIT NO INSOMNIA
app.put("/artigo/:id", (req, res) => {
    const artigo = Artigo.updateOne({ _id: req.params.id}, req.body, (err) => {
            
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi editado com sucesso !"
        });

        return res.json({
            error: false,
            message: "Artigo editado com sucesso !"
        });
    });    
});

// ROTA DELETA INFORMAÇÃO DA API NO BANCO DE DADOS
app.delete("/artigo/:id", (req, res) => {
    const artigo = Artigo.deleteOne({ _id: req.params.id}, (err) => {
         if(err) return res.status(400).json({
             error: true,
             message: "Error: Artigo não foi apagado com sucesso !"
         });
         return res.json({
             error: false,
             mensage: "Artigo apagado com sucesso !"
         });
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});