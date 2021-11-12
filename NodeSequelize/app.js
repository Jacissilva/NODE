const Sequelize = require('sequelize');
//conexão via sequeliza
const sequelize = new Sequelize('celke', 'celkeone','123456',{
    host:'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
console.log('conexão realizada com sucesso');
}).catch(function(err){
    console.log('erro: Ao Conexão realizada com BD!' + err)
});

//tabela via sequelize
const Pagamento = sequelize.define('pagamentos', {
    //attributes
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE
    //allowNull defaults to true        
    }   
});
//funcão que força a criação a tabela
// para criar a tabela a const = users, depois de
// criada troco por Pagamento.
//Pagamento.sync({force: true});
Pagamento.create({
    nome: "Light",
    valor: 180
});
