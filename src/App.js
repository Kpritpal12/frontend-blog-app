
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Bollywood from './components/Bollywood'
import Fitness from './components/Fitness'
import Food from './components/Food'
import Home from './components/Home'
import Navbar from './Navbar'
import Technology from './components/Technology'
import Tourism from './components/Tourism'


const App = () => {

  
  return (
    <>
    <div>
      <Router>
      <Navbar/>
          <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='/tourism' element={<Tourism />} />
            <Route path='/fitness' element={<Fitness />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/bollywood' element={<Bollywood />} />
            <Route path='/food' element={<Food />} />
            
          </Routes>
        </Router>

    </div>
    </>
  )
}

export default App