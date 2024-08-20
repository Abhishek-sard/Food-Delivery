import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<cart/>}/>
        <Route path="/order" element={<placeOrder/>}/>
        
      </Routes>
    </div>
  )
}

export default App