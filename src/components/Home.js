import React from 'react'
import { useGlobalContext } from '../store/Context';

const Home =(props) =>{
  const globalContext = useGlobalContext()
  return (<>
      In Home
      {/* {globalContext} */}
  </>)
}

export default Home;