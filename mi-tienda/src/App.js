import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'VapeBoss'} />} />
            <Route path='/category/:categoryName' element={<ItemDetailContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
