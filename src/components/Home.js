import React from 'react'
import { useGlobalContext } from '../store/Context';

const Home =(props) =>{
  const globalContext = useGlobalContext()
  return (
    <>
      {globalContext}
    </>
  )
}

export default Home;