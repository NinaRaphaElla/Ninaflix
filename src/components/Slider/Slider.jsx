import React, { useState, useEffect } from "react";

import sliderData from "../../../Data/sliderData.json";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Slider = () => {
  const [currentSlide, setCurrentSLide] = useState(0);
  const slideLength = sliderData.slideLength;

  const nextSlide = () => {
    setCurrentSLide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSLide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSLide(0);
  }, []);

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
            {/* <div className="absolute inset-0 overflow-hidden"> */}
            {index === currentSlide && (
              <div>
                <img
                  src={slide.image}
                  alt="slider"
                  className="object-cover min-w-full h-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

                {/* content */}
                <div className="content absolute left-8 bottom-20 w-[50%] max-w-[80%] text-white space-y-2">
                  <p>{slide.type}</p>
                  <h1 className="text-4xl">{slide.title}</h1>
                  <div className="flex gap-6">
                    <p>{slide.ratings}</p>
                    <p className="font-bold">{slide.quality}</p>
                  </div>
                  <p className="text-sm font-light">{slide.desc}</p>
                </div>

                {/* arrows */}
                <div className="absolute top-[40%] right-[5%] space-x-2">
                  <button
                    className="bg-gray pr-3 pl-3 py-3 rounded-sm text-white rotate-180 hover:bg-blue-100"
                    onClick={prevSlide}
                  >
                    <MdArrowForwardIos />
                  </button>
                  <button
                    className="bg-gray pr-3 pl-3 py-3 rounded-sm text-white"
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
