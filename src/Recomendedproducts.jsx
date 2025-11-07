import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recomendedproducts = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  const tabs = [
    { id: "featured", label: "Featured", color: "bg-[white]" },
    { id: "new", label: "New Arrivals", color: "bg-[#5eff00]" },
    { id: "top", label: "Top Rated", color: "bg-[#0077ff]" },
    { id: "best", label: "Best Seller", color: "bg-[#ae00ff]" },
  ];
  let feacherd = [
    {
      img: "featured1.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured2.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured3.webp",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured4.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured5.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured6.webp",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured7.webp",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured8.webp",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured9.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured10.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured11.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured12.webp",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured13.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured14.webp",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured15.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured16.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured17.webp",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured18.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
  ];

  return (
    <div className="container">
      <div className="bg-[#b1b1b1]">
        <h2 className="text-[23px] font-[600] text-center mt-[40px]">
          Recommended For You
        </h2>

        {/* Tabs */}
        <div className="grid justify-center mt-[30px]">
          <ul className="flex gap-8 font-[500]">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative cursor-pointer hover:text-[#0066ff]
                ${activeTab === tab.id ? "text-[#0066ff] after:w-full" : ""}
                after:content-[''] after:block after:h-[2px] after:bg-[#0066ff] after:transition-all after:duration-300
                ${activeTab === tab.id ? "after:w-full" : "after:w-0"}
                after:mx-auto after:mt-[5px]
                `}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="mt-[40px] relative h-[650px]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                tab.color
              } ${
                activeTab === tab.id
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Slider {...settings}>
                {feacherd.map((item, i) => (
                  <div key={i} className=" h-[350px] bg-[] w-[250px]">
                    <div className=" flex justify-center">
                      <img className=" h-[250px]" src={item.img} alt="" />
                      <div className=" absolute h-[50px] w-[50px] bg-[red] ml-[150px] mt-[20px] rounded-full">
                        <img src="discountsticker.avif" alt="" />
                      </div>
                    </div>
                    <div className=" ml-[25px]">
                      <p className=" text-[15px]">{item.name}</p>
                    <div className=" flex items-center gap-2">
                      <div className=" flex">
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                      </div>
                      <p className=" text-[#5e5c5c]">{`( ${item.review} review )`}</p>
                    </div>
                    <div className=" flex font-[700] text-[15px] gap-5 mt-[5px]">
                      <p>TK {item.prise}</p>
                      <del className=" text-[#aaa9a9]">TK {item.discount}</del>
                    </div>
                    </div>
                    
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomendedproducts;
