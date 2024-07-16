import React from 'react'
import {motion} from "framer-motion";

function Marquee  ()  {
  return (

    <>
    <div  className='w-full flex justify-center h-60 bg-green-700 rounded-t-xl mt-8' >
     

         <div className='flex
         bg-green-700  text-white justify-center align-middle px-1 top-24 h-20 w-full text-7xl border-y-2 border-gray-400 font-semibold '><motion.h1 initial={{x:"-100%"}} animate={{x:0}} transition={{repeat:Infinity, ease:"linear", duration:10}}  className=' bg-green-700' >WE ARE OCHI</motion.h1> 
         </div >

         <div className='flex
         bg-green-700  text-white justify-center align-middle px-1 top-24 h-20 w-full text-7xl border-y-2 border-gray-400 font-semibold '><motion.h1 initial={{x:"-100%"}} animate={{x:0}} transition={{repeat:Infinity, ease:"linear", duration:10, }}  className=' bg-green-700' >WE ARE OCHI</motion.h1> 
         </div >

         <div className='flex
         bg-green-700  text-white justify-center align-middle px-1 top-24 h-20 w-full text-7xl border-y-2 border-gray-400 font-semibold '>
        <motion.h1 initial={{x:"-100%"}} animate={{x:0}} transition={{repeat:Infinity, ease:"linear",duration:10}}  className=' bg-green-700'>WE ARE OCHI</motion.h1>
         </div >
         
    </div>
    </>
  )
}

export default Marquee
