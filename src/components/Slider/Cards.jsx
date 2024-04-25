import React from "react";

import poster from "../../images/posters/movie_1.jpg";

import { AiFillStar } from "react-icons/ai";
import { FaPlay, FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Cards = () => {
  return (
    <>
      <div className="max-w-[25%] rounded-lg bg-neutrals-100 neutrals-200 text-white text-xs">
        <img
          src={poster}
          alt="Movie Poster"
          className="object-cover h-48 w-full rounded-t-lg"
        />

        <div className="p-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="border-white bg-white border-2 rounded-full p-3 cursor-pointer hover:opacity-80">
                <FaPlay className="text-primary-100" />
              </div>
              <div className="border-white bg-white bg-opacity-10 border-2 rounded-full p-3">
                <FaPlus size={12} />
              </div>
            </div>
            <div className="border-white bg-white bg-opacity-10 border-2 rounded-full p-3">
              <IoIosArrowDown size={12} />
            </div>
          </div>

          <p className="font-semibold text-base mb-7">Blood for Dust</p>

          {/* <div className="flex items-center gap-4 mb-1  bg-neutrals-200">
            <p className="flex items-center gap-1 font-extralight">
              <span className="text-primary">
                <AiFillStar size={14} />
              </span>
              6.7
            </p>
            <p className="font-semibold">HD</p>
            <p className="font-extralight">2024</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Cards;
