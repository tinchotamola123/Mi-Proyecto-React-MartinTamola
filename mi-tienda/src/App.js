import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
//import { useState } from 'react';
import { CacheProvider } from './context/CacheContext';
import DarkProductList from './components/DarkProductList';
import { FavoritosProvider } from './context/FavoritosContext';
import { useEffect } from 'react';
import { getFirestore , doc , getDoc, collection, getDocs } from 'firebase/firestore'


function App() {
  //acceso a un documento especifico -> detail
  useEffect(() => {
    //obtenemos base de datos
      const database = getFirestore();

    //obtenemos referencia del documento
      const itemReference = doc(database, 'items' , '9Y8OXoLnuxTygsukOQNK');
    
      //obtener el doumneto a paritr de la referencia  
      getDoc(itemReference)
        .then((snapshot) => {
          //preguntamos si existe el documento
          if(snapshot.exists()) {
            const item= {
              id: snapshot.id,
              ...snapshot.data()
            };
            console.log(item);
          }
        })
        .catch(error => console.warn(error));

    },[]);
  //acceso a una coleccion -> list
  useEffect(()=>{
    //obtenemos la base de datos
    const database = getFirestore();

    //obtenemos la referencia a la coillection item
    const collectionReference = collection(database, 'items');

    //obtenemos los datos a partir de la referencia creada
    getDocs(collectionReference)
      .then((snapshot) =>{
        const list = snapshot
          .docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          console.log(list);
      })
      .catch(error=>console.warn(error));
  },[]);

  return (
    <BrowserRouter>
      <div className="App">
      <CacheProvider>
        <NavBar />
          {/* <Events /> */}
          {/* <Intercambiabilidad /> */}
          {/* <DarkProductList /> */}
          {/* <Condionales /> */}
          <FavoritosProvider>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'VapeBoss'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/favoritos' element={<DarkProductList />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/nosotros' element={<Nosotros />} />
          </Routes>
          </FavoritosProvider>
        </CacheProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
