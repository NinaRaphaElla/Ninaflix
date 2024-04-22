import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import data from "../../Data/data.json";

import {
  RiSearchLine,
  RiAccountCircleLine,
  RiMenuLine,
  RiHomeHeartFill,
  RiPlayCircleFill,
  RiVidiconFill,
  RiAndroidFill,
  RiFireFill,
  RiArrowLeftSLine,
} from "react-icons/ri";

const Header = () => {
  //state for search
  const [isSearch, setIsSearch] = useState(false);
  const setSearch = () => {
    setIsSearch(!isSearch);
  };

  //state for menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-neutrals-200 py-3 px-6 z-49 fixed top-0 w-full">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-1 bg-neutrals-400 py-2.5 px-3 rounded-[4px] text-white cursor-pointer"
            onClick={setMenu}
          >
            <RiMenuLine />
            <p className=" text-xs font-semibold">Browse</p>
          </div>
          <img src={logo} alt="logo" className="h-9 mr-6" />
          <div
            className="flex text-white text-2xl gap-4 cursor-pointer"
            onClick={setSearch}
          >
            {isSearch ? (
              <div>
                <RiSearchLine className="text-primary" />
              </div>
            ) : (
              <RiSearchLine color="text-white" />
            )}
            <RiAccountCircleLine />
          </div>
        </div>
        <div>
          {isSearch ? (
            <div className="flex items-center mt-3">
              <div className="bg-white p-2 rounded-l-[4px]">
                <RiSearchLine />
              </div>
              <input
                type="text"
                placeholder="Enter keywords"
                className="w-full px-3 py-1 bg-white rounded-r-[4px] font-light focus:outline-none"
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Sidebar */}

      <div
        className={
          isMenuOpen
            ? "z-50 bg-black fixed top-0 bottom-0 w-[25%] p-6 space-y-16 -translate-x-96 transition-all ease-in-out duration-500"
            : "z-50 bg-black fixed top-0 bottom-0 w-[25%] p-6 space-y-16 transition-all ease-in-out duration-500"
        }
      >
        <div className="space-y-6">
          {/* back button */}
          <div
            className="bg-neutrals-300 inline-block rounded-full p-1 cursor-pointer"
            onClick={setMenu}
          >
            <RiArrowLeftSLine className="text-white text-xl" />
          </div>
          {/* MENU */}
          <div className="text-xs text-white font-medium space-y-8">
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary">
              <RiHomeHeartFill size={14} />
              <p>Home</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-primary">
              <RiPlayCircleFill size={14} />
              <p>Movies</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-primary">
              <RiVidiconFill size={14} />
              <p>TV Shows</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-primary">
              <RiFireFill size={14} />
              <p>top IMDB</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-primary">
              <RiAndroidFill size={14} />
              <p>Android App</p>
            </div>
          </div>
        </div>

        {/* Genre */}
        <div className="space-y-5">
          <p className="text-gray-600 text-xs tracking-widest">GENRE</p>

          <div className="flex flex-wrap text-white text-xs gap-1.5">
            {data.data[0].genre.map((item) => (
              <p
                className="border-[0.05rem] border-gray-800 py-1 px-2 rounded-lg cursor-pointer hover:border-white"
                key={item.id}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
