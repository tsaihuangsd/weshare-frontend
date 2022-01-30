// import React, {useContext} from 'react'
import {useStateContext, } from "../store/context.js"

const UserProfile=()=>{
  const state = useStateContext()
  // const dispatch = useDispatchContext()
  console.log("state.userProfile: ", state.userProfile)
  const userProfile = state.userProfile
  const userProfileKeys = Object.keys(userProfile)
  return (
    <div className = 'callback-container'>
      UserProfile Component: <br/><br/>
      
      { userProfileKeys.map(userProfileKey=>(
        <li>{userProfileKey}: {userProfile[userProfileKey]}
        </li>
      ))}
    </div>
  )
}

export default UserProfile
