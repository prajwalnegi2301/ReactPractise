
import React from 'react';


const Navbar =() => {
  
  return (
    
      <div className='flex justify-around text-white font-serif mt-4'>
        <h1 className='font-semibold tracking-tighter '>ochi</h1>

        <ul className='flex gap-5'>
            <li><a href="">Services</a></li>
            <li><a href="">Our Work</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Insights</a></li>
            <li><a className='relative left-40 ' href="">Contact</a></li>
        </ul>
      </div>
    
  )
}

export default Navbar
