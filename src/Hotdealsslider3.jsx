import React from 'react'
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hotdealsslider3 = () => {
  let Hotdealsmini = [
    {
      img: "hotdealsmini6.jpeg",
      name: "VISION Blender VIS-SBL-023-1200W (KM 4 in 1)",
      review: "0",
      prise: "5,840",
      discount: "7,300",
    },
        {
      img: "hotdealsmini7.jpeg",
      name: "RFL Wardrobe Double 5D KD Deluxe HD - Zara",
      review: "0",
      prise: "10,730",
      discount: "12,200",
    },
        {
      img: "hotdealsmini8.jpeg",
      name: "Nasir 32 pc Dinner set",
      review: "0",
      prise: "4,503",
      discount: "6,500",
    },
        {
      img: "hotdealsmini9.png",
      name: "SMC Plus 250 ml (Orange)",
      review: "0",
      prise: "36",
      discount: "40",
    },
      {
      img: "hotdealsmini10.jpeg",
      name: "Bronze-Kasha Thala Bati Cup 6 Pcs Set-2",
      review: "0",
      prise: "5,576",
      discount: "8,200",
    },
    
]
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <div className=' mt-[30px]'>
        <Slider {...settings}>
      {
        Hotdealsmini.map((item,i) =>(
          <div>
        <div className=' h-[100px] w-[300px] bg-[] flex items-center ml-[10px]'>
            <div className=' flex items-center h-[100px] min-w-[100px]'>
                <img className=' h-[90px]' src={item.img} alt="" />
            </div>
            <div>
                <p className=' text-[#525050]  text-[13px] font-[500]'>{item.name}</p>
                  <div className=" flex mt-[5px]">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                <div className=' flex gap-3  mt-[5px] text-[13px]'>
                    <p className=' font-[700] text-[13px]'>{`TK ${item.prise}`}</p>
                    <del className=' text-[#807c7c]'>{`TK ${item.discount}`}</del>
                </div>
            </div>
        </div>
          </div>

        ))
      }
        </Slider>
    </div>
  )
}

export default Hotdealsslider3