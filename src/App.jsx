import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Welcome from './components/Main/Main'
import Help from './components/Can-I-Help/Help'
import Consulting from './components/Consulting-Services/Consulting'
import Review from './components/Reviews/Review'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />   
      <Welcome />  
      <Help /> 
      <Consulting />
      <Review />
      <Footer />
    </>
  )
}

export default App
