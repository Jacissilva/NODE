import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-1">Titulo do artigo 001</h1>
          <p className="lead">Conteúdo do artigo. This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
        <Container fluid>
        <h2 className="display-2">Titulo do artigo 002</h2>
         <p className="primary">Conteúdo do artigo. Estudo dedicado ao JavaScript</p>
        </Container>
        <Container fluid>
        <h3 className="display-3">Titulo do artigo 003</h3>
         <p className="primary">Conteúdo do artigo. Estudo dedicado ao JavaScript</p>
        </Container>
        <Container fluid>
        <h4 className="display-4">Titulo do artigo 004</h4>
         <p className="primary">Conteúdo do artigo. Estudo dedicado ao JavaScript</p>
        </Container>
      </Jumbotron>
    </div>
    
  );
};

export default Article;