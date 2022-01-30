import {useEffect} from 'react';
import { useHistory } from "react-router-dom";
// import './Styles/Callback.css';
import {useStateContext, useDispatchContext} from "../store/context.js"
import { useAuth0 } from "@auth0/auth0-react";
import { reloadUserProfile } from '../store/actions/actions.js';

const Callback = () => {
  const {user, getIdTokenClaims, getAccessTokenSilently } = useAuth0() 
  const state = useStateContext()
  const dispatch = useDispatchContext()
  const history = useHistory()
  useEffect( async ()=>{
    const id_token = (await getIdTokenClaims()).__raw
    const access_token =  await getAccessTokenSilently()
    const userProfile = { 
      ...user,
      'access_token': access_token,
      'id_token': id_token,
    }
    console.log("current state (before reload): ", state)
    // persist user profile in local storage
    if (Object.keys(userProfile).length !== 0){
      localStorage.setItem('userProfile', JSON.stringify(userProfile))
    }
    //update global state with new user profile    
    reloadUserProfile(dispatch)
  }, [user])

  return (<>
    Callback Component
    {/* {console.log("current state (in return): ", state)} */}
    {history.push('/groups')}
  </>)

}

export default Callback