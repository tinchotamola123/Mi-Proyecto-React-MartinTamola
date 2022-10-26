import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Contacto from './components/Contacto';
import Galeria from './components/Galeria';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<ItemListContainer greeting={'VapeBoss'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/galeria' element={<Galeria />} />
          </Routes>
          </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
