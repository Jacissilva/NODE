
//Conexao com BD MySQL
const mysql = require('mysql');

//A partir do MySQL 8 apresenta o erro ao utilizar o usuário root para conexão, necessário criar novo usuário (instrução no Readme)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'celkeone',
    password: '1234',
    database:'celke'
});

connection.connect(function (err) {
    if (err) console.error('error ao realizar a conexão com DB' + err.stack);
        return;    
});

connection.query("insert into users (nome, email) values ('Kelly','kelly@celke.com.br')", function(err,result){
    if(!error){
        console.log('Usuário cadastrado com sucesso!');
    }else{
        console.log('Erro ao cadastrar o Usuario');
    }
})

// lista dados do bando
//connection.query('SELECT * FROM users', function(err, rows, fields){
//    if(!err){
//        console.log('Resultado: ', rows);
//    }else{
//        console.log('Erro ao realizar a consulta');
//    }
//});
