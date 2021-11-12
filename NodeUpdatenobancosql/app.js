// conexao com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'celkeone',
    password:'123456',
    database: 'celke'
});

connection.connect(function(err){
    if(err) console.error('erro ao realizar conexão de BD' + err.stack); return;
});

connection.query("UPDATE users set nome = 'Jessica 4' WHERE id = 4", function(err,result){
    if(!err){
        console.error('Usuário editado com sucesso!');
    }else{
        console.error('Erro: O Usuário não foi editado com sucesso!');   
    }
});