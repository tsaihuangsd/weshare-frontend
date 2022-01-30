import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom"
import {Home, Groups, Callback, Loading, UserProfile} from './components'
import NavBar from './components/NavBar'
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = ()=> {
  const {isLoading} = useAuth0()
  useEffect(() =>{
    if (isLoading){
      return  <Loading/>
    }
  }, [isLoading])
  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/groups" component={Groups} />
          <ProtectedRoute exact path="/callback" component={Callback} />
          <ProtectedRoute exact path='/userprofile' component={UserProfile}/>
        </Switch>
    </div>
  );
}

export default App;
