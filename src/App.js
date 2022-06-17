
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hola Mundo!
//         </p>
//       </header>
//     </div>
//   );
// }

function App() {
  return<>
  <NavBar />
  <ItemListContainer />
  </>
}

export default App;


