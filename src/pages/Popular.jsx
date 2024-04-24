import React from "react";
import Cards from "../components/Cards.jsx";
import { FaFilter } from "react-icons/fa";

const Popular = () => {
  return (
    <>
      {/* Title */}
      <div className="flex items-center gap-4 text-white mt-24 px-6">
        <div className="w-1 h-7 bg-primary"></div>
        <div className="text-2xl font-semibold">Popular Movies</div>
        <FaFilter size={24} className="hover:text-primary cursor-pointer" />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 transition-all ease-in-out duration-300 gap-4 mx-6 mt-20">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Popular;
