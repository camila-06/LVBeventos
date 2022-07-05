
//@ts-check
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  let titulo = "Nuestros servicios:" 
  let stock = 5
  let initial = 1

  return(
  <>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={titulo}/>} />      
      <Route path="/category/:idCategory" element={<ItemListContainer greeting={titulo}/>} /> 
      <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
    </Routes>
  </BrowserRouter>
  

  {/* <ItemCount stock={stock} initial={initial} onAdd="onAdd"/> */}

  </>
  )
}

export default App;


