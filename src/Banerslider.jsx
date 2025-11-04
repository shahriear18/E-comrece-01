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
    cssEase: "linear",
  };
  let sliderimg = [
    {
      img: "banerslider1.png",
    },
    {
      img: "banerslider2.jpeg",
    },
    {
      img: "banerslider3.png",
    },
    {
      img: "banerslider4.png",
    },
    {
      img: "banerslider5.jpeg",
    },
    {
      img: "banerslider6.png",
    },
    {
      img: "banerslider7.png",
    },
    {
      img: "banerslider8.jpeg",
    },
    {
      img: "banerslider9.png",
    },
    {
      img: "banerslider10.jpeg",
    },
    {
      img: "banerslider11.png",
    },
    {
      img: "banerslider12.png",
    },
    {
      img: "banerslider13.png",
    }
  ];
  return (
    <div className="slider-container w-[900px] mt-[20px] ml-[40px] ">
      <Slider {...settings}>
        {
          sliderimg.map((item , i) =>(
        <div key={i} className=" h-[440px]">
          <img className="rounded-[5px]" src={item.img} alt="" />
        </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default AutoPlay;
