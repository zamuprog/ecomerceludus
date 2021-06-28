
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bulma/css/bulma.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer'



function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenido a la tienda Ludus' />
    </> 
  );
}

export default App;
