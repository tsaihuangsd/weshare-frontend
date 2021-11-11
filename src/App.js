import './App.css';
import { Route, Switch } from "react-router-dom"
import {Home, Groups, Callback} from './components'
import NavBar from './components/NavBar'


const App = ()=> {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/groups" component={Groups} />
        <Route exact path="/callback" component={Callback} />
      </Switch>   
    </div>
  );
}

export default App;
