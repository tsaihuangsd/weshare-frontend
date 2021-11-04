import React, {createContext, useContext} from "react"

const GlobalContext = createContext(undefined)
export const useGlobalContext = () =>{
  return useContext(GlobalContext)
}

export const GlobalContexts = ({children}) =>{
  return (
    <GlobalContext.Provider value={"new context"}>
      {children}
    </GlobalContext.Provider>
  )
}