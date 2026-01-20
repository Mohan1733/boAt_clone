import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [cartCount,SetCartCount]=useState(0)
  return (
    <>
    <div className='font-sans antialiased text-gray-900'>
    <div className="bg-gray-100 text-center py-2 font-semibold text-xs tracking-wide hidden md:block">
        Legacy of Sound | Shop Your Favourite Audio Gear Now!
      </div>
      <Navbar cartCount={cartCount}/>
    </div>
    </>
  )
}

export default App