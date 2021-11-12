import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';

/*function App() {
  return (
    <div>
      Olá, Celke!
    </div>
  );
}*/

class App extends React.Component{
  render(){
    return (
      <div>
        <Headers />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
