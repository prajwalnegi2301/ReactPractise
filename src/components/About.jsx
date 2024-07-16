import React from "react";

const About = () => {
  return (
    <div className="w-full  bg-[#CDEA68]">
      <div className="flex justify-center  bg-[#CDEA68] font-large text-5xl mr-60 ml-10">
        <h1 className=" bg-[#CDEA68] mt-10">
        
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <div className=" bg-[#CDEA68] border-b-2 border-zinc-500 mt-10"></div>

      <div className="flex mt-20 bg-[#CDEA68] justify-around">
        
        <h2 className="bg-[#CDEA68]">What you can expect:</h2>
      
      <div className=" flex ml-20 gap-10 bg-[#CDEA68]">
        <h2 className="bg-[#CDEA68] w-48 h-60">
          We create tailored presentations to help you presuade your colleagues,
          clients, or investors. Whether it's live or digital,delievered for one
          or a hundred people.
        </h2>
        <h2 className=" bg-[#CDEA68] w-48 h-60">
          We create tailored presentations to help you presuade your colleagues,
          clients, or investors. Whether it's live or digital,delievered for one
          or a hundred people.
        </h2>
        </div>
      </div>

      <div className=" bg-[#CDEA68] gap-6 flex justify-center ">
        <h2 className="bg-[#CDEA68] mb-10">S:</h2>
        <a className=" bg-[#CDEA68]" href="">
          Instagram
        </a>
        <a className=" bg-[#CDEA68] mb-10" href="">
          Google
        </a>
        <a className=" bg-[#CDEA68] mb-10" href="">
          Facebook
        </a>
        <a className=" bg-[#CDEA68] mb-10" href="">Linked In</a>
      </div>
    </div>
  );
};

export default About;
