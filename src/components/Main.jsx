import React from "react";
import {motion} from "framer-motion"
// import {FaArrowUpLong} from "react-icons/fa6";

function Main () {
  motion
  return (
    <div>
      <div>
        <h1 className="font-bold text text-white text-7xl  mt-40 ml-10 tracking-tighter">
          WE CREATE
        </h1>
        <div className="flex">
          <motion.div initial={{width:0}}  animate={{width:"10vw"}} transition={{ease:[0.76,0,0.24,1] , duration:1}} className=" w-40 h-14 bg-[#67e8f9] ml-10 mt-3"></motion.div>
          <h1 className="font-bold text text-white  text-7xl  ml-10 tracking-tighter">
            EYE OPENING
          </h1>
        </div>

        <h1 className="font-bold text text-white text-7xl ml-10 tracking-tighter">
          PRESENTATIONS
        </h1>
      </div>

      <div className="w-full border-b-2 border-zinc-800 mt-48"></div>



      <div className="flex justify-around mt-4">
        <p className="text-white">For public and private companies</p>
        <p className="text-white">From the first pitch to IPO</p>
        <button className="bg-[ #1d1c1c;] text-white border-2 rounded-xl w-20 ">
          Start
        </button>
      </div>
    </div>
  );
};

export default Main;
