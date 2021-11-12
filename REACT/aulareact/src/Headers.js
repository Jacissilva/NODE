import React from 'react';
//monta tela cabeçalho h0...h5 tipo de fonte/tamanho
// div - permite uncluir varios itens / texto.
class Headers extends React.Component{
    render(){
        return(
            <div>
            <h0>Cabeçalho 000</h0>    
            <h1>Cabeçalho 001</h1> 
            <h2>Cabeçalho 002</h2>
            <h3>Cabeçalho 003</h3>
            <h4>Cabeçalho 004</h4>        
            <h5>Cabeçalho 005</h5>    
            </div>
        );
    }
}

export default Headers;