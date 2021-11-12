import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    filmes: [],
  }
 //localiza filmes no sate --- -- star%20wars
  async componentDidMount() {
    const response = await api.get('star%20war');

    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div>
        <h1>Listar os Filmes</h1>
       
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default App;
