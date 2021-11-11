import React, {useEffect, useContext} from 'react';
// import Loading from './Loading'
import { useHistory } from "react-router-dom";
// import './Styles/Callback.css';
import {useStateContext,useDispatchContext,} from "../store/Context"
import { useAuth0 } from "@auth0/auth0-react";

export default function Callback(){
  const {user, getIdTokenClaims, getAccessTokenSilently } = useAuth0() 

  // const traverseUser = () =>{

  // }
  return (<>
    Auth0 User:
    {/* {traverseUser()} */}
    {console.log("user:", user)}
  </>)
}