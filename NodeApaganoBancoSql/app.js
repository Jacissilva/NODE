const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'celkeone',
    password:'123456',
    database: 'celke'
});

connection.connect(function(err){
    if(err) console.error('Erro ao realizar a conexão com BD' + err.stack); return;
});

connection.query("Delete From users WHERE id = 5", function(err,result){
    if(!err){
      console.log("Usuário apagado com sucesso!")  
    }else{
       console.log("Erro: O Usuário não foi apagado com sucesso!")  
    }
});