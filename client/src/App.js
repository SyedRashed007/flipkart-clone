import './App.css';
import Header from './Components/header/Header'
import Home from './Components/Home/Home'
import Cart from './Components/cart/Cart'
import DetailView from './Components/ItemDetails/DetailView'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider'
import { Box } from '@material-ui/core'
 
function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <div className="App">
          <BrowserRouter>
            <Header/>
            <Box style={{ marginTop: 54}}>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path= '/cart' component={Cart}/>
                <Route exact path='/product/:id' component={DetailView}/>
              </Switch>
            </Box>
          </BrowserRouter>
        </div>
      </ContextProvider>
    </TemplateProvider>
  )
}

export default App;
