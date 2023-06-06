import React from "react";

const Header2 = ({step}) => {
  return (
    <div className="flex items-center justify-between relative sm:m-5">
      <p className="tracking-[3px] text-xl">Apply</p>
      <div className="tracking-[3px] text-lg sm:text-xl md:text-2xl font-light md:absolute md:left-1/2 md:translate-x-[-50%] mt-5">
        <div className="w-fit md:px-2 uppercase">
          Your Application
          <div className="progress flex gap-2 mt-4 lg:mt-8 px-5">
            <div className="w-1/3 h-[0.1rem] bg-[#BE9F56]"></div>
            <div className={`w-1/3 h-[0.1rem] ${(step > 3)? "bg-[#BE9F56]" : "bg-black"}`}></div>
            <div className={`w-1/3 h-[0.1rem] ${(step > 4)? "bg-[#BE9F56]" : "bg-black"}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
