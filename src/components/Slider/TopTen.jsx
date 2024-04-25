import React from "react";

const TopTen = (props) => {
  return (
    <>
      <div>
        <div className="flex items-center relative ">
          <img src={props.number} alt="movie poster" className="h-48" />
          <img
            src={props.poster}
            alt="movie poster"
            className="h-48 absolute top-0 left-16 w-[8.5rem]"
          />
        </div>
      </div>
    </>
  );
};

export default TopTen;
