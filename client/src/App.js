import './App.css';
import Header from './Components/header/Header'
import Home from './Components/Home/Home'
import Cart from './Components/cart/Cart'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path= '/cart' component={Cart}/>
        </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
