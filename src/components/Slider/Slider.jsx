import React, { useState, useEffect } from "react";

import sliderData from "../../../Data/sliderData.json";

import { MdArrowForwardIos } from "react-icons/md";
import { FaPlay, FaInfoCircle, FaStar } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSLide] = useState(0);
  const slideLength = sliderData.sliderData.length;

  const autoScroll = false;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSLide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSLide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  // useEffect(() => {
  //   setCurrentSLide(0);
  // }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      {sliderData.sliderData &&
        sliderData.sliderData.map((slide, index) => (
          // slider
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {/* items */}
            {index === currentSlide && (
              <div>
                <img
                  src={slide.image}
                  alt="slider"
                  className="object-cover min-w-full h-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-90% w-screen h-screen"></div>

                {/* content */}
                <div className="content absolute bottom-20 left-8 text-white space-y-5 w-[45%]">
                  <p className="font-light">{slide.type}</p>
                  <img
                    src={slide.title}
                    alt="slider title"
                    className="max-h-48"
                  />
                  {/* <h1 className="text-4xl">{slide.title}</h1> */}
                  <div className="space-y-2 font-light">
                    <div className="flex gap-6">
                      <p className="flex items-center gap-2">
                        <span className="text-primary-100">
                          <FaStar />
                        </span>
                        {slide.ratings}
                      </p>
                      <p className="font-bold">{slide.quality}</p>
                    </div>
                    <p className="text-sm">{slide.desc}</p>
                  </div>

                  <div className="flex gap-5">
                    <button className="bg-white py-2 pr-7 pl-6 rounded-[4px] text-black font-bold flex items-center gap-2 hover:opacity-80">
                      <span className="text-primary-100">
                        <FaPlay className="text-xl" />
                      </span>
                      Play
                    </button>
                    <button className="bg-white bg-opacity-30 py-2 pr-7 pl-6 rounded-[4px] text-white font-semibold flex items-center gap-2 hover:bg-opacity-25">
                      <span className="">
                        <FaInfoCircle className="text-xl" />
                      </span>
                      More Info
                    </button>
                  </div>
                </div>

                <div className="absolute text-white bottom-[25%] right-0 ">
                  <p className="pr-12 pl-2 border-l-2 py-1 bg-white bg-opacity-15">
                    {slide.age}
                  </p>
                </div>

                {/* arrows */}
                <div className="absolute top-[40%] right-[5%] space-x-2">
                  <button
                    className="bg-white bg-opacity-20 pr-3 pl-3 py-3 rounded-sm text-white rotate-180 hover:opacity-80 transition-all ease-in-out duration-300"
                    onClick={prevSlide}
                  >
                    <MdArrowForwardIos />
                  </button>
                  <button
                    className="bg-white bg-opacity-20 pr-3 pl-3 py-3 rounded-sm text-white hover:opacity-80 transition-all ease-in-out duration-300"
                    onClick={nextSlide}
                  >
                    <MdArrowForwardIos />
                  </button>
                </div>
              </div>
            )}
            {/* </div> */}
          </div>
        ))}
    </>
  );
};

export default Slider;
