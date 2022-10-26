import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Contacto from './components/Contacto';
import { CacheProvider } from './context/CacheContext';
import { CartProvider } from './context/CartContext';
import Galeria from './components/Galeria';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <CacheProvider>
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
        </CacheProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
