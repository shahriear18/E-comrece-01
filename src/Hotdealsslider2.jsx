import React from 'react'
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hotdealsslider2 = () => {
  let Hotdealsmini = [
    {
      img: "hotdealsmini1.jpeg",
      name: "HONOR X6C (6GB/128GB)",
      review: "0",
      prise: "14,669",
      discount: "14,999",
    },
        {
      img: "hotdealsmini2.jpeg",
      name: "VISION Induction Cooker VSN-1204 Border Eco ",
      review: "0",
      prise: "3,560",
      discount: "4,500",
    },
        {
      img: "hotdealsmini3.jpeg",
      name: "Zeblaze GTS 3 Bluetooth Calling Smart Watch",
      review: "0",
      prise: "1,649",
      discount: "2,999",
    },
        {
      img: "hotdealsmini4.png",
      name: "Joya 8s (Wings)",
      review: "0",
      prise: "71",
      discount: "80",
    },
      {
      img: "hotdealsmini5.jpeg",
      name: "Smc Orsalain",
      review: "0",
      prise: "5",
      discount: "6",
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
  };
  return (
    <div className=' mt-[100px]'>
        <Slider {...settings}>
      {
        Hotdealsmini.map((item,i) =>(
          <div>
        <div className=' h-[100px] w-[300px] bg-[#] flex items-center'>
            <div className=' flex items-center h-[100px] min-w-[100px]'>
                <img className=' h-[90px]' src={item.img} alt="" />
            </div>
            <div>
                <p className=' text-[#525050] text-[13px] font-[500]'>{item.name}</p>
                  <div className=" flex mt-[5px]">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                <div className=' flex gap-3  mt-[5px]'>
                    <p className=' font-[700]'>{`TK ${item.prise}`}</p>
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

export default Hotdealsslider2