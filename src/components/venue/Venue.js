import React from "react";

import { TbWorldSearch } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";

import { LuListTodo } from "react-icons/lu";

const Venue = () => {
  return (
    <div
      id="venue-container"
      className="px-6 py-14 md:px-10 md:py-24 h-auto max-w-screen-7xl mx-auto bg-black"
    >
      <ul className="grid grid-cols-1 lg:pl-20 lg:grid-cols-3 gap-20">
        <li className="flex flex-col gap-3 sm-mb-4">
          <div className="flex gap-3">
            <TbWorldSearch size={50} color="#EF4444" />
            <div className=" text-white celestraHeroFont">
              <h2 className="text-md tracking-widest">
                {" "}
                <span className="text-2xl text-red-500">I</span>NVESTIGATE
              </h2>
            </div>
          </div>
          <div className="h-1  w-[30%] sm:w-[16%] lg:w-[40%]  bg-red-500 rounded-full"></div>
        </li>
        <li className="flex flex-col gap-3 -mb-4 ml-auto lg:ml-0">
          <div className="flex gap-4">
            <FaBookReader size={50} color="#EF4444" />
            <div className=" text-white celestraHeroFont">
              <h2 className="text-md tracking-widest">
                {" "}
                <span className="text-2xl text-red-500">E</span>DUCATE
              </h2>
            </div>
          </div>
          <div className="h-1 ml-2 w-[65%] lg:w-[44%]  bg-red-500 rounded-full"></div>
        </li>
        <li className="flex flex-col gap-3 -mb-2">
          <div className="flex gap-4">
            <LuListTodo size={50} color="#EF4444" />
            <div className=" text-white celestraHeroFont">
              <h2 className="text-md tracking-widest">
                {" "}
                <span className="text-2xl text-red-500">O</span>RGANIZE{" "}
              </h2>
            </div>
          </div>
          <div className="h-1 ml-2 w-[28%] sm:w-[17%] lg:w-[45%] bg-red-500 rounded-full"></div>
        </li>
        {/* <li className="flex flex-col gap-3 -mb-4 ml-auto lg:ml-0">
          <div className="flex gap-4">
            <SiRiotgames size={50} color="#EF4444" />
            <div className=" text-white celestraHeroFont">
              <h2 className="text-md tracking-widest">
                {" "}
                <span className="text-2xl text-red-500">G</span>ames
              </h2>
              <p className="text-sm tracking-widest">Immersive world</p>
            </div>
          </div>
          <div className="h-1 ml-1 w-[65%] lg:w-[38%]  bg-red-500 rounded-full"></div>
        </li> */}
      </ul>
    </div>

  );
};

export default Venue;
