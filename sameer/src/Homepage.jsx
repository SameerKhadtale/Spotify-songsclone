import React from 'react'
import ReactDOM from 'react-router-dom'


const Homepage = () => {
const[counter,setCounter]= initialState(0)


  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={()=>(prevValue+1)}>+</button>
    </div>
  )
}

export default Homepage