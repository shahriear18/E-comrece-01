import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container w-[900px] mt-[20px] ">
      <Slider {...settings}>
        <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider1.png" alt="" />
        </div>
                <div className=" h-[470px]">
          <img className="rounded-[5px]" src="banerslider2.jpeg" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider3.png" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider4.png" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider5.jpeg" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider6.png" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider7.png" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider8.jpeg" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider9.png" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider10.jpeg" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider11.png" alt="" />
        </div>
                <div className="  h-[440px]">
          <img className="rounded-[5px]" src="banerslider12.png" alt="" />
        </div>
                <div className=" h-[440px]">
          <img className="rounded-[5px]" src="banerslider13.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
