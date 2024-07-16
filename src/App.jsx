import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      
      <Navbar/>
      <Main/>
      <Marquee/>
      <About/>
      <Eyes/>
    </>
  )
}

export default App
