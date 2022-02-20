import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
        <footer>
          <p>Desenvolvido por <a href="https://www.linkedin.com/in/reemoreno/" target="_blank">Renato Moreno</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
