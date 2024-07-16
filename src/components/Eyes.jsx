import React, { useEffect } from "react";

const Eyes = () => {

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;

            let deltaX = mouseX-window.innerWidth/2;
            let deltaY = mouseY-window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180);
        })
    })



  return (
    <div className=" mt-8 mb-8 flex justify-center w-full relative h-full">
      <div className="bg-green-900 w-3/4 h-80 relative mb-8 flex justify-center">
        {/* <img className=' w-80 h-60' src="\src\assets\green_colour_box.png" alt="" />  */}

        <div className="flex gap-8 bg-green-900 relative justify-center items-center ">
          <div className="w-80 h-80  rounded-full flex justify-center items-center bg-white">
            <div className="w-40 h-40  relative flex justify-center items-center rounded-full bg-black">
              <div  className="w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center">
                <div className="w-10 h-10 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          <div className="w-80 h-80  flex justify-center items-center rounded-full bg-white">
            <div className="w-40 h-40 relative rounded-full flex justify-center items-center  bg-black">
              <div className=" w-full  h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center ">
                <div className="w-10 h-10 relative  rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;


// style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} 

