import logo from './logo.png';
import './App.css';
import Pokedex from './pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pokédex
        </p>

      </header>
      <main className="Layout">
        <Pokedex  />
      </main>
    </div>
  );
}

export default App;
