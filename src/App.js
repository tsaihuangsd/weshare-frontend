import './App.css';
import { Route, Switch } from "react-router-dom"
import {Home} from './components'
import NavBar from './components/NavBar'


const App = ()=> {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>   
    </div>
  );
}

export default App;
