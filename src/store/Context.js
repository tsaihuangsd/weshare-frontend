import React, {createContext, useContext, useReducer} from "react"
import { initialState } from "./initial-state"
import { reducers } from "./reducers"
import RootActions from "./actions"

const StateContext = createContext()
export const useStateContext = () =>{
  return useContext(StateContext)
}
const DispatchContext = createContext()
export const useDispatchContext = () =>{
  return useContext(DispatchContext)
}
const ActionContext = createContext()
export const useActionContext = () =>{
  return useContext(ActionContext)
}

export const ContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(reducers, initialState)
  const rootActions = RootActions
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <ActionContext.Provider value={rootActions}>
          {children}
        </ActionContext.Provider>
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}