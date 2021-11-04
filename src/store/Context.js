import React, {createContext} from "react"

const GlobalContext = createContext(undefined)

export const GlobalContexts = ({children}) =>{
  return (
    <GlobalContext.Provider value={""}>
      {children}
    </GlobalContext.Provider>
  )
}