import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';

function App() {
  console.log("Hola Mundo")
  const value = {price : 100 , title : 'asd'};
  return (
    <div className="App">
      <header className="App-header">
        <p>Tienda de Vaporizadores</p>
        <MyComponent name='coder' value={value} />
        <MyComponent name='house' value={200} />
        <NavBar />
      </header>
      
    </div>
  );
}

export default App;
