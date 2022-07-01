
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  let titulo = "Nuestros servicios:" 
  let stock = 5
  let initial = 1

  return(
  <>
  <NavBar />
  <ItemListContainer greeting={titulo}/>
  <ItemCount stock={stock} initial={initial} onAdd="onAdd"/>
  <ItemDetailContainer />
  </>
  )
}

export default App;


