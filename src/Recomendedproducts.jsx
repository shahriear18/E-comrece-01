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
    { id: "featured", label: "Featured" },
    { id: "new", label: "New Arrivals" },
    { id: "top", label: "Top Rated" },
    { id: "best", label: "Best Seller" },
  ];

  const featured = [
        {
      img: "featured1.jpeg",
      name: "Winter style Raincoat",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "featured2.jpeg",
      name: "Helathy brown chicken",
      review: "5",
      prise: "300",
      discount: "320",
    },
    {
      img: "featured3.webp",
      name: "Black plactic chair black color",
      review: "5",
      prise: "780",
      discount: "820",
    },
    {
      img: "featured4.jpeg",
      name: "Kids tor motocycle bike",
      review: "5",
      prise: "350",
      discount: "410",
    },
    {
      img: "featured5.jpeg",
      name: "Premium Shoe Rack Red 4 Step Red-TEL",
      review: "5",
      prise: "522",
      discount: "580",
    },
    {
      img: "featured6.webp",
      name: "Kidstar Pant Diaper Small 42Pcs 3-8 KG",
      review: "3",
      prise: "605",
      discount: "890",
    },
    {
      img: "featured7.webp",
      name: "Kidstar Pant Diaper Extra Large 32Pcs 12-18 KG",
      review: "7",
      prise: "605",
      discount: "890",
    },
    {
      img: "featured8.webp",
      name: "House hold leadder classic 5 step ",
      review: "5",
      prise: "2232",
      discount: "2480",
    },
    {
      img: "featured9.jpeg",
      name: "TPR GS Double SS Auto GS LPG (A-211)",
      review: "5",
      prise: "2767",
      discount: "3375",
    },
    {
      img: "featured10.jpeg",
      name: "Royal Chair (Fit) Black",
      review: "5",
      prise: "780",
      discount: "820",
    },
    {
      img: "featured11.jpeg",
      name: "Round Laundry Basket 38 CM Red",
      review: "5",
      prise: "225",
      discount: "300",
    },
    {
      img: "featured12.webp",
      name: "Getwell First Aid Box for Comprehensive Emergency Medical Supplies",
      review: "5",
      prise: "111",
      discount: "150",
    },
    {
      img: "featured13.jpeg",
      name: "Cloth Brush Exclusive",
      review: "5",
      prise: "30",
      discount: "50",
    },
    {
      img: "featured14.webp",
      name: "Juice Jug 1.35L With 4 Pcs Flower Glass-Green",
      review: "5",
      prise: "140",
      discount: "165",
    },
    {
      img: "featured15.jpeg",
      name: "GArdening jar 12 ltr",
      review: "5",
      prise: "250",
      discount: "280",
    },
    {
      img: "featured16.jpeg",
      name: "Regal Harper Laminated Board Reading Table",
      review: "5",
      prise: "7173",
      discount: "8150",
    },
    {
      img: "featured17.webp",
      name: "VISION Electric Heavy Iron 1000W with Shock and Burn Proof VIS-DEI-012",
      review: "5",
      prise: "1107",
      discount: "1350",
    },
  ];

  const newArrivals = [
    { img: "new1.jpeg", name: "New Arrival Hoodie", review: "5", price: "980", discount: "1300" },
    { img: "new2.jpeg", name: "Winter Hat", review: "4", price: "400", discount: "650" },
  ];

  const topRated = [
    { img: "top1.jpeg", name: "Top Rated Sweater", review: "5", price: "1200", discount: "1500" },
    { img: "top2.jpeg", name: "Warm Jacket", review: "5", price: "1500", discount: "1800" },
  ];

  const bestSeller = [
    { img: "best1.jpeg", name: "Best Seller Coat", review: "5", price: "1900", discount: "2200" },
    { img: "best2.jpeg", name: "Classic Hoodie", review: "5", price: "1100", discount: "1400" },
  ];

  // 🧠 Active tab অনুযায়ী কোন list দেখাবে
  const getActiveProducts = () => {
    switch (activeTab) {
      case "featured":
        return featured;
      case "new":
        return newArrivals;
      case "top":
        return topRated;
      case "best":
        return bestSeller;
      default:
        return featured;
    }
  };

  return (
    <div className="container">
      <div className="bg-[#b1b1b1] pb-[80px]">
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
                after:mx-auto after:mt-[5px]`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="mt-[40px]">
          <Slider {...settings}>
            {getActiveProducts().map((item, i) => (
              <div key={i} className="h-[350px] w-[250px]">
                <div className="flex justify-center relative">
                  <img className="h-[250px]" src={item.img} alt="" />
                  <div className="absolute h-[50px] w-[50px] bg-[red] right-[20px] top-[20px] rounded-full overflow-hidden">
                    <img src="discountsticker.avif" alt="" />
                  </div>
                </div>
                <div className="ml-[25px]">
                  <p className="text-[15px]">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <CiStar key={i} />
                      ))}
                    </div>
                    <p className="text-[#5e5c5c]">{`( ${item.review} review )`}</p>
                  </div>
                  <div className="flex font-[700] text-[15px] gap-5 mt-[5px]">
                    <p>TK {item.price}</p>
                    <del className="text-[#aaa9a9]">TK {item.discount}</del>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recomendedproducts;

