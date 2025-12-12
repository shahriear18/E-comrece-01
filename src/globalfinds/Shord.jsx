import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

const Shord = () => {
  let navigate = useNavigate()
  let handlepath = (item) =>{
    alert("dflheoifhrgwdghwder")
    navigate(`/global-finds1/${item.name}`)
  }
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  let shords = [
    {
      name: "Hand-Forged Pattern Steel Katana with Narcissus Lacquered Saya | 41 Floral Samurai Sword",
      img: "shord1.webp",
      price: "238.00 ",
      discount: "$255.00",
      model: "Model bond number : 1",
    },
    {
      name: "Sakura War Dao | Hand-Forged Five-Layer Steel Chinese Saber with Yellow Ray-Skin Scabbard & Gilt-Brass Fittings",
      img: "shord2.webp",
      price: "650.99 ",
      discount: "677.00 ",
      model: "Model bond number : 2",
    },
    {
      name: "Flying Dragon jian sword,High Carbon Steel balde,Battle Ready",
      img: "shord3.webp",
      price: "150.00 ",
      discount: "160.00 ",
      model: "Model bond number : 3",
    },
    {
      name: "Flying Dragon Jian,Forged Spring Steel Blades,Better Performance Durability",
      img: "shord4.webp",
      price: "150.58 ",
      discount: "160.58 ",
      model: "Model bond number : 4",
    },
    {
      name: "Flying Dragon Knife Battle Ready,Furnishing Articles",
      img: "shord5.webp",
      price: "150.00",
      discount: "166.00 ",
      model: "Model bond number : 5",
    },
    {
      name: "Flying Dragon Sword,Forged Damascus Blades,Rosewood Scabbard",
      img: "shord6.webp",
      price: "168.00 ",
      discount: "178.00 ",
      model: "Model bond number : 6",
    },
    {
      name: "Den Yoshioka Katana – 40.7″ (103.5 cm) Manganese Steel Blade, Lacquered Wood Saya",
      img: "shord7.webp",
      price: "138.00 ",
      discount: "151.00 ",
      model: "Model bond number : 7",
    },
    {
      name: "Chidori Shisui Katana – 40.7″ Spring Steel, Titanium Finish, Lacquered Saya",
      img: "shord8.webp",
      price: "168.00 ",
      discount: "158.00 ",
      model: "Model bond number : 8",
    },
    {
      name: "Samurai Katana – T10 High Carbon Blade with Burnt-Clay Edge",
      img: "shord9.jpg",
      price: "256.88 ",
      discount: "266.88 ",
      model: "Model bond number : 9",
    },
    {
      name: "amurai Katana – Red-Finished High Carbon Blade, Blue Leather Tsuka",
      img: "shord10.webp",
      price: "118.88 ",
      discount: "128.88 ",
      model: "Model bond number : 10",
    },
    {
      name: "83″ Handmade Hook Sickle Spear – High Manganese Steel",
      img: "shord11.webp",
      price: "198.00 ",
      discount: "218.00 ",
      model: "Model bond number : 11",
    },
    {
      name: "Spear,Spring steel blade,Cold weapon",
      img: "shord12.jpg",
      price: "168.00 ",
      discount: "188.00 ",
      model: "Model bond number : 12",
    },
  ];
  return (
    <div>
      <div className=" mt-[50px]">
        <h2 className=" text-[23px] font-[600] ml-[20px]">Get chainese shords of all varient</h2>
        <Slider {...settings}>
          {shords.map((item, i) => (
            <div 
              key={i}
              className="z-0 shadow-2xl shadow-black/50 w-[250px]  ml-[20px] mt-[20px] rounded-[10px] "
            >
              <img
                src={item.img}
                alt=""
                className="mt-[10px] absolute h-[150px]"
              />
              <img
                src="/jordern logo.jpg"
                alt=""
                className="h-[40px] mt-[10px] ml-[10px] absolute"
              />
              <h2 className="mt-[180px] absolute ml-[10px] font-[700] text-[18px]">
                {item.model}
              </h2>
              <p onClick={() => handlepath(item)} className=" hover:underline text-[11px] font-[700] mt-[215px] ml-[10px] absolute w-[240px]">
                {item.name}
              </p>
              <div>
              <ul className="flex gap-[2px] mt-[265px] ml-[10px]">
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li></li>
              </ul>                
              </div>

              <div className=" mt-[20px] flex  gap-10 ml-[30px]">
                <del className="font-[800] text-[23px]  text-[#737270]">
                  {item.discount}
                </del>
                <h3 className="font-[800] text-[23px]   text-[#292928]">
                  {item.price}
                </h3>
              </div>
              <button className="h-[35px] w-[200px] bg-[#6e02fa] rounded-[20px] mt-[15px] ml-[20px] text-white font-[700]">
                Add to Cart
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shord;
