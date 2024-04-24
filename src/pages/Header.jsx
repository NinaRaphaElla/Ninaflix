import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import data from "../../Data/data.json";

import {
  RiSearchLine,
  RiAccountCircleFill,
  RiMenuLine,
  RiHomeHeartFill,
  RiPlayCircleFill,
  RiVidiconFill,
  RiAndroidFill,
  RiFireFill,
  RiArrowLeftSLine,
} from "react-icons/ri";

import { FaSearch } from "react-icons/fa";

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

  //change color nav
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      {/* Header */}
      <div
        className={`py-3 px-6 z-40 fixed top-0 w-full ${
          color
            ? "bg-neutrals-100 bg-opacity-95 transition-all ease-in-out duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 ">
            <div className="text-white cursor-pointer" onClick={setMenu}>
              <RiMenuLine className="text-xl" />
              {/* <p className=" text-xs font-semibold">Browse</p> */}
            </div>
            <img src={logo} alt="logo" className="h-9 mr-6" />
          </div>
          <div className="flex items-center text-white gap-4 cursor-pointer text-2xl">
            <div className="" onClick={setSearch}>
              {isSearch ? (
                <div>
                  <FaSearch className="text-primary-200" />
                </div>
              ) : (
                <FaSearch color="text-white" />
              )}
            </div>
            {isSearch ? (
              <div className="flex items-center text-black text-sm">
                <input
                  type="text"
                  placeholder="Titles, people, genres"
                  className="w-56 px-3 py-2 bg-white rounded-sm font-light focus:outline-none"
                />
              </div>
            ) : null}
            <RiAccountCircleFill className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Sidebar */}

      <div
        className={
          !isMenuOpen
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
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary-100">
              <RiHomeHeartFill size={14} />
              <a href="/">
                <p>Home</p>
              </a>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-primary-100">
              <RiPlayCircleFill size={14} />
              <a href="/popular">
                <p>Movies</p>
              </a>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-primary-100">
              <RiVidiconFill size={14} />
              <p>TV Shows</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-primary-100">
              <RiFireFill size={14} />
              <p>top IMDB</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-primary-100">
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
