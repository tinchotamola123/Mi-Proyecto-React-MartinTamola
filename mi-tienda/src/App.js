import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Hola Mundo")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi Primer App en React.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentacion React
        </a>
      </header>
    </div>
  );
}

export default App;
