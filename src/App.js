import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from './Components/CartContext';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function App() {
  let titulo = "Nuestros servicios:" 


  return(
  <CartContext>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={titulo}/>} />      
        <Route path="/category/:idCategory" element={<ItemListContainer greeting={titulo}/>} /> 
        <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
      </Routes>
    </BrowserRouter>
  </CartContext>
  )
}

export default App;