import React from 'react';
// Com <h ??> colorido ! 
//monta tela cabeçalho h0...h5 tipo de fonte/tamanho
// div - permite uncluir varios itens / texto.
class Footer extends React.Component{
    render(){
        return(
            <div>
            <h0 style={{color: "green"}}>Rodapé 0</h0>
            <h1 style={{color: "#0000FF"}}>Rodapé 1</h1> 
            <h2 style={{color: "green"}}>Rodapé 2</h2>
            <h3 style={{color: "#0000FF"}}>Rodapé 3</h3>
            <h4 style={{color: "green"}}>Rodapé 4</h4>
            </div>
        );
    }
}

export default Footer;