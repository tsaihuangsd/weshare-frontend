// import axios from 'axios';
// import { access } from 'fs';
// import moment from 'moment';
import {ActionTypes} from "../constants/action-types.js";
// import { useContext, useCallback, useMemo } from 'react';
// import {useStateContext, useDispatchContext} from "../context.js"

// const loadContexts = () =>{
//   return {  state: loadStateContext(),
//             dispatch: loadDispatchContext()}
// }

// const prepAPICallOptions = (currentUser) =>{  
//   const access_token = currentUser['access_token']
//   return {
//     headers: { Authorization: `Bearer ${access_token}` }
//   }
// }

//reload persisted user profile from local storage into global state
export const reloadUserProfile = (dispatch) =>{
  const userProfile = JSON.parse(localStorage.getItem('userProfile'))
  if (Object.keys(userProfile).length !== 0){
    console.log("user profile found in local storage: ", userProfile)
    dispatch({type: ActionTypes.USER_PROFILE_RELOAD, payload: userProfile})
  }
}

export const createUserProfile = async(userProfile, dispatch) =>{

  dispatch({type: ActionTypes.USER_PROFILE_CREATING, payload: userProfile})
  
}