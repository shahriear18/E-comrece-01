import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recomendedproducts = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const settings1 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: true,
  };

  const tabs = [
    { id: "featured", label: "Featured" },
    { id: "new", label: "New Arrivals" },
    { id: "top", label: "Top Rated" },
    { id: "best", label: "Best Seller" },
  ];

  const featured1 = [
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
  const featured2 = [
        {
      img: "feacherd21.jpeg",
      name: "  PRAN Full Cream Milk Powder 1kg",
      review: "5",
      prise: "780",
      discount: "1200",
    },
    {
      img: "feacherd22.jpeg",
      name: "  VISION Induction Cooker VSN-1204 Border Eco ",
      review: "5",
      prise: "300",
      discount: "320",
    },
    {
      img: "feacherd23.webp",
      name: " Vision Evaporative Air cooler - 45 Super Cool",
      review: "5",
      prise: "780",
      discount: "820",
    },
    {
      img: "feacherd24.jpeg",
      name: " Vertical Gardening Flower tub 3 Pcs Set Brown TEL",
      review: "5",
      prise: "350",
      discount: "410",
    },
    {
      img: "feacherd25.jpeg",
      name: "  Pacific Shoe Rack 4 Step Red",
      review: "5",
      prise: "522",
      discount: "580",
    },
    {
      img: "feacherd26.jpeg",
      name: " Duranta Avenger Premier 16 Inch Bicycle ",
      review: "3",
      prise: "605",
      discount: "890",
    },
    {
      img: "feacherd27.webp",
      name: "  VISION Mosquito Killing Bat With Automatic Protection Control MKB-002",
      review: "7",
      prise: "605",
      discount: "890",
    },
    {
      img: "feacherd28.webp",
      name: "  Kidstar Pant Diaper Large 34Pcs 9-18 KG ",
      review: "5",
      prise: "2232",
      discount: "2480",
    },
    {
      img: "feacherd29.jpeg",
      name: " Stylee Champion Arm Chair Orange ",
      review: "5",
      prise: "2767",
      discount: "3375",
    },
    {
      img: "feacherd210.jpeg",
      name: "  VISION Electric Heavy Iron 1000W with Shock and Burn Proof VIS-DEI-012",
      review: "5",
      prise: "780",
      discount: "820",
    },
    {
      img: "feacherd211.jpeg",
      name: "  Topper Nonstick Fry Pan Black 22Cm",
      review: "5",
      prise: "225",
      discount: "300",
    },
    {
      img: "feacherd212.jpeg",
      name: "  Topper Nonstick Dosa Tawa Black 26 Cm",
      review: "5",
      prise: "111",
      discount: "150",
    },
    {
      img: "feacherd213.jpeg",
      name: " RFL Moving Shirt Hanger 41CM 6 Pcs Set-SM Blue ",
      review: "5",
      prise: "30",
      discount: "50",
    },
    {
      img: "feacherd214.webp",
      name: "  Apple Jug 2.5L Trans",
      review: "5",
      prise: "140",
      discount: "165",
    },
    {
      img: "feacherd215.jpeg",
      name: "  Juice Jug 1.35L With 4 Pcs Flower Glass-Green",
      review: "5",
      prise: "250",
      discount: "280",
    },
    {
      img: "feacherd216.webp",
      name: "VISION RO Water Purifier Special Edition  ",
      review: "5",
      prise: "7173",
      discount: "8150",
    },
    {
      img: "feacherd217.webp",
      name: "VISION RO Water Purifier Special Edition  ",
      review: "5",
      prise: "1107",
      discount: "1350",
    },
    { img: "feacherd218.jpeg",
      name: "RFL Bela Ruti Box Big ",
      review: "5",
      prise: "1107",
      discount: "1350",
    }
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
        return featured1;
      case "new":
        return newArrivals;
      case "top":
        return topRated;
      case "best":
        return bestSeller;
      default:
        return featured1;
    }
  };
    const getActiveProducts2 = () => {
    switch (activeTab) {
      case "featured":
        return featured2;
      case "new":
        return newArrivals;
      case "top":
        return topRated;
      case "best":
        return bestSeller;
      default:
        return featured2;
    }
  };

  return (
    <div className="container">
      <div className="bg-[] pb-[80px]">
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
          <Slider {...settings1}>
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
                    <p>TK {item.prise}</p>
                    <del className="text-[#aaa9a9]">TK {item.discount}</del>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
            <Slider {...settings2}>
            {getActiveProducts2().map((item, i) => (
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
                    <p>TK {item.prise}</p>
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

