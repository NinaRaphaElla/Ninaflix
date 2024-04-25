import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Slider from "../components/Slider/Slider.jsx";
import Cards from "../components/Slider/Cards.jsx";
import TopTen from "../components/Slider/TopTen.jsx";

import poster1 from "../images/posters/movie_2.jpg";
import number1 from "../images/Slider/topTen/first.png";
import number2 from "../images/Slider/topTen/second.png";
import number3 from "../images/Slider/topTen/third.png";
import number4 from "../images/Slider/topTen/fourth.png";
import number5 from "../images/Slider/topTen/fifth.png";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div>
        <Slider />
      </div>

      <div className="mx-8">
        <Cards />
      </div>

      <div className="mx-8">
        {/* Title */}
        <div className="flex items-center gap-4 text-white mt-24 px-6">
          <div className="w-1 h-7 bg-primary-100"></div>
          <div className="text-lg font-semibold">
            Top 10 Movies in the Philippines Today
          </div>
        </div>

        <div className="mt-8">
          <Carousel responsive={responsive} swipeable={false} infinite={false}>
            <TopTen number={number1} poster={poster1} />
            <TopTen number={number2} poster={poster1} />
            <TopTen number={number3} poster={poster1} />
            <TopTen number={number4} poster={poster1} />
            <TopTen number={number5} poster={poster1} />
          </Carousel>
          ;
        </div>
      </div>
    </>
  );
};

export default Home;
