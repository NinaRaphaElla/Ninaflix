import React from "react";

import poster from "../images/posters/movie_1.jpg";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Cards = () => {
  return (
    <>
      <div className="max-w-56 max-h-full bg-neutrals-200 neutrals-200 text-white text-xs">
        <img src={poster} alt="Movie Poster" className="object-cover" />

        <div className="p-2">
          <div className="flex items-center gap-4 mb-1  bg-neutrals-200">
            <p className="flex items-center gap-1 font-extralight">
              <span className="text-primary">
                <AiFillStar size={14} />
              </span>
              6.7
            </p>
            <p className="font-semibold">HD</p>
            <p className="font-extralight">2024</p>
          </div>

          <p className="font-semibold mb-7">Blood for Dust</p>

          <div className="bg-neutrals-400 p-2 rounded-md">
            <p className="flex items-center justify-center gap-3">
              <span>
                <FaPlay />
              </span>
              Watch now
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
