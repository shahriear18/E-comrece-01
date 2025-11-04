import React from "react";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hotdealsslider2 from "./Hotdealsslider2";
import Hotdealsslider3 from "./Hotdealsslider3";

const Hotdealsslider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: true,
  };
  let Hotdeals = [
    {
      img: "hotdelas1.jpeg",
      name: "Mini Jeep - Red & Black",
      review: "0",
      prise: "5,625",
      discount: "7,500",
    },
    {
      img: "hotdelas2.jpeg",
      name: "Haier 30 Litre Horizontal Geyser With Shock Proof Technology (ES30H-CK3(BD) White",
      review: "0",
      prise: "7,999",
      discount: "20,500",
    },
        {
      img: "hotdelas3.jpeg",
      name: "Philips Air Fryer HD9200/90, Uses Up To 90% Less fat, 1400Watt 4.1 Liter, with Rapid Air Technology Black Large",
      review: "0",
      prise: "10,358",
      discount: "12,800",
    },
        {
      img: "hotdelas4.webp",
      name: "Honor Pad X7 4GB 64GB (Best Price) ",
      review: "0",
      prise: "12,416",
      discount: "13,999",
    },
  ];
  return (
    <div className=" container">
      <div className=" h-[400px] mt-[50px]">
        <h2 className=" text-[23px] font-[500] text-[red] mb-[40px] ml-[5px]">Hot Deals of the day</h2>
        <Slider {...settings}>
          {Hotdeals.map((item, i) => (
            <div className="">
            <div
              key={i}
              className=" h-[360px] bg-[#ffffff]  flex gap-3 items-center border-[#006eff] border rounded-[10px] w-[98%] ml-[10px]"
            >
              <div className="h-[400px] flex items-center">
                <img className=" h-[300px] min-w-[300px]" src={item.img} alt="#" />
              </div>
              <div className=" ml-[30px]">
                <h2 className=" text-[18px] font-[500]">{item.name}</h2>
                <div className=" flex items-center mt-[10px] gap-2">
                  <div className=" flex">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <p>{`( ${item.review} Reviews )`}</p>
                </div>
                <div className=" flex gap-5 mt-[10px]">
                  <h3 className=" text-[20px] font-[600] ">{`TK ${item.prise}`}</h3>
                  <del className=" text-[20px] font-[600] text-[#858383]">{`TK ${item.discount}`}</del>
                </div>
                <div className=" flex items-center mt-[20px] gap-2">
                  <button className=" hover:bg-[#0059ff] hover:text-[white] hover:border-transparent border py-[10px] px-[50px] font-[500] rounded-[5px]">
                    {" "}
                    Buy Now
                  </button>
                  <CiHeart
                    size={20}
                    className=" hover:text-[#00c3ff] transition-all"
                  />
                </div>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
      <Hotdealsslider2/>
      <Hotdealsslider3/>
    </div>
  );
};

export default Hotdealsslider;
