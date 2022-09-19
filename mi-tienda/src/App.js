import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Carusel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Carusel />
      <ItemListContainer greeting={'Bienvenidos a VapeBoss'} />
    </div>
  );
}

export default App;
