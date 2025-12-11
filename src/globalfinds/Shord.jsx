import React from "react";

const Shord = () => {
  let shords = [
    {
      name: "Hand-Forged Pattern Steel Katana with Narcissus Lacquered Saya | 41 Floral Samurai Sword",
      img: "shord.webp",
      price: "238.00 ",
      discount: "$255.00",
    },
    {
      name: "Sakura War Dao | Hand-Forged Five-Layer Steel Chinese Saber with Yellow Ray-Skin Scabbard & Gilt-Brass Fittings",
      img: "shord.webp",
      price: "650.99 ",
      discount: "677.00 ",
    },
    {
      name: "Flying Dragon jian sword,High Carbon Steel balde,Battle Ready",
      img: "shord.webp",
      price: "150.00 ",
      discount: "160.00 ",
    },
    {
      name: "Flying Dragon Jian,Forged Spring Steel Blades,Better Performance Durability",
      img: "shord.webp",
      price: "150.58 ",
      discount: "160.58 ",
    },
    {
      name: "Flying Dragon Knife Battle Ready,Furnishing Articles",
      img: "shord.webp",
      price: "150.00",
      discount: "166.00 ",
    },
    {
      name: "Flying Dragon Sword,Forged Damascus Blades,Rosewood Scabbard",
      img: "shord.webp",
      price: "168.00 ",
      discount: "178.00 ",
    },
    {
      name: "Den Yoshioka Katana – 40.7″ (103.5 cm) Manganese Steel Blade, Lacquered Wood Saya",
      img: "shord.webp",
      price: "138.00 ",
      discount: "151.00 ",
    },
    {
      name: "Chidori Shisui Katana – 40.7″ Spring Steel, Titanium Finish, Lacquered Saya",
      img: "shord.webp",
      price: "168.00 ",
      discount: "158.00 ",
    },
    {
      name: "Samurai Katana – T10 High Carbon Blade with Burnt-Clay Edge",
      img: "shord.webp",
      price: "256.88 ",
      discount: "266.88 ",
    },
    {
      name: "amurai Katana – Red-Finished High Carbon Blade, Blue Leather Tsuka",
      img: "shord.webp",
      price: "118.88 ",
      discount: "128.88 ",
    },
    {
      name: "83″ Handmade Hook Sickle Spear – High Manganese Steel",
      img: "shord.webp",
      price: "198.00 ",
      discount: "218.00 ",
    },
    {
      name: "Spear,Spring steel blade,Cold weapon",
      img: "shord.webp",
      price: "168.00 ",
      discount: "188.00 ",
    },
  ];
  return (
    <div>
      <div>
                <div className=" shoes flex">
          <div className="h-[410px] w-[250px] border-1 ml-[20px] mt-[20px] rounded-[10px] ">
            <img
              src="/shoe1.jpg"
              alt=""
              className="mt-[10px] absolute h-[240px]"
            />
            <img
              src="/jordern logo.jpg"
              alt=""
              className="h-[40px] mt-[10px] ml-[10px] absolute"
            />
            <h2 className="mt-[210px] absolute ml-[10px] font-[700] text-[18px]">
              Jordern 4 White Thunder
            </h2>
            <p className="text-[11px] font-[700] mt-[240px] ml-[10px] absolute w-[240px]">
              Step back in time with the iconic Jordan 4 Retro White Thunder, a
              timeless basketball shoe that combines style and performance.
            </p>
            <ul className="flex gap-[2px] mt-[295px] ml-[10px]">
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
            <ul className="font-[700] flex gap-[10px] mt-[8px] ml-[10px]">
              <li className="mt-[-2px]">Color :-</li>
              <li className="h-[20px] w-[20px] rounded-full bg-[#adaca8]"></li>
              <li className="h-[20px] w-[20px] rounded-full bg-black"></li>
              <li className="h-[20px] w-[20px] rounded-full bg-[red]"></li>
            </ul>
            <h3 className="font-[800] text-[23px] absolute ml-[180px] mt-[-30px] text-[#737270]">
              $90.0
            </h3>
            <button className="h-[35px] w-[200px] bg-[#6e02fa] rounded-[20px] mt-[15px] ml-[20px] text-white font-[700]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shord;
