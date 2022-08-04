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
  return(
  <CartContext>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />      
        <Route path="/category/:idCategory" element={<ItemListContainer />} /> 
        <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
      </Routes>
    </BrowserRouter>
  </CartContext>
  )
}

export default App;