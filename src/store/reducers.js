import {ActionTypes} from "./constants/action-types.js";
// import { initialState } from "./initial-state";

export const reducers = (state, action) =>{
  switch (action.type) {
    case ActionTypes.USER_PROFILE_RELOAD:
      return {
        ...state,
        userProfile: action.payload,
        status: 'Reload user profile'
      }
    case ActionTypes.USER_PROFILE_CREATING:
      return {...state,
        userProfile: action.payload,
        errorMessage: null,
        status: 'Creating user profile',      
      }
    case ActionTypes.USER_PROFILE_CREATED:
      return {...state,
        status: 'user profile created'
      }


    case ActionTypes.ERROR:
      return {...state,
        status: `ERROR: ${action.payload}`
      }
    default:
      return {...state,
        errorMessage: `Error: Unknown Action Type - ${action.type}`  
      }
  }
}