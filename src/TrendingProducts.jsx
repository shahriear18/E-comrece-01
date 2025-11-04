import React from "react";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingProducts = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: true,
  };
  let trendingproduct = [
    {
      img: "trendingproduct1.webp",
      name: "VISION Electric Heavy Iron 1000W with Shock and Burn Proof VIS-DEI-012",
      review: "6",
      prise: "1,107",
      discount: "1,350",
    },
        {
      img: "trendingproduct2.webp",
      name: "Pran Drinking Water 2Ltr 6 pis",
      review: "10",
      prise: "149",
      discount: "240",
    },
        {
      img: "trendingproduct3.jpeg",
      name: "RFL Paddle Bin 15l Silver",
      review: "5",
      prise: "552",
      discount: "650",
    },
        {
      img: "trendingproduct4.webp",
      name: "Guermiss Velvet MAtter Lipstick 3.5g GS034",
      review: "1",
      prise: "529",
      discount: "750",
    },
        {
      img: "trendingproduct5.webp",
      name: "RFL Wardrobe Dubble 5D KD Elegant Black Diamond",
      review: "1",
      prise: "11,500",
      discount: "12,200",
    },
  ];
  return (
    <div className=" container">
      <div className="">
        <p className=" font-[700] text-[23px] py-[40px]">Trending Products</p>
        <Slider {...settings}>
        {trendingproduct.map((item,i) => (
          <div key={i} className=" h-[350px] bg-[] ">
            <div className=" max-h-[300px] overflow-hidden">
              <img className=" h-[230px]" src={item.img} alt="" />
            </div>
            <h2 className=" text-[12px] font-[500] mt-[5px] w-[220px]">{item.name}</h2>
            <div className=" flex gap-5 mt-[5px]">
              <div className=" flex ml-[10px]">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <p className=" text-[11px]">{`( ${item.review} Review)`}</p>
            </div>
            <div className=" flex gap-5 ml-[20px]">
              <h2 className=" font-[700] text-[19px]">{item.prise}</h2>
              <del className=" font-[700] text-[19px] text-[#6d6b6b] ">
                {item.discount}
              </del>
            </div>
          </div>
        ))}            
        </Slider>

      </div>
    </div>
  );
};

export default TrendingProducts;
