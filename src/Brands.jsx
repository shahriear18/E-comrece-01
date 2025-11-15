import React from "react";
import Slider from "react-slick";

const Brands = () => {
  let brands = [
    {
      img: "brands1.png",
    },
    {
      img: "brands2.jpeg",
    },
    {
      img: "brands3.jpeg",
    },
    {
      img: "brands4.png",
    },
    {
      img: "brands5.jpeg",
    },
    {
      img: "brands6.png",
    },
    {
      img: "brands7.jpeg",
    },
    {
      img: "brands8.jpeg",
    },
    {
      img: "brands9.png",
    },
    {
      img: "brands10.png",
    }
  ];
    const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className=" container">
      <div className=" h-[] mb-[100px] mt-[50px]">
        <h2 className=" text-[23px] font-[700] text-[#666060]">
          Most popular brands
        </h2>
          <Slider {...settings}>
        {
            brands.map((item,i) =>(
        <div>
          <div className=" h-[] mt-[50px]">
            <img src={item.img} alt="" />
          </div>
        </div>                
            ))
        }            
          </Slider>


      </div>
    </div>
  );
};

export default Brands;
