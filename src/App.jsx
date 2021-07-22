
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bulma/css/bulma.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
     <>
      <BrowserRouter>
      <NavBar/>
      <Switch>
          <Route exact path='/'>
            <Home titulo="BIENVENIDOS"/>
          </Route> 
          <Route exact path='/detail/:parametro'>
            <ItemDetailContainer/>
          </Route>          
      </Switch>  
      </BrowserRouter> 
    </> 
   );
}

export default App;
