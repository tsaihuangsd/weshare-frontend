import './App.css';
import { Route, Switch } from "react-router-dom"
import {Home, Groups, Callback} from './components'
import NavBar from './components/NavBar'
import ProtectedRoute from "./auth/ProtectedRoute";


const App = ()=> {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/groups" component={Groups} />
        <ProtectedRoute exact path="/callback" component={Callback} />
      </Switch>   
    </div>
  );
}

export default App;
