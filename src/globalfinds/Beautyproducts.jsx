import React from "react";

const Beautyproducts = () => {
  let product = [
    {
      img: "make1.png",
      name: "A Vibrant Red Lipstick",
      info: "quotes and captions about red lipstick, fonts that mimic lipstick, or images of text written with lipstick, often used for.",
      price: "$90.0",
      color: "#7700ff",
      bgcolor: `#9d4bfa`,
    },
    {
      img: "make2.png",
      name: "Elegant Perfume Bottle",
      info: "A luxurious red perfume bottle with a sleek, cylindrical design. The glass body features vertical ridges that give it an.",
      price: "$120.0",
      color: "#59ff00",
      bgcolor: "#b4ff8c",
    },
    {
      img: "make3.png",
      name: "A sleek cosmetic bottle",
      info: "A sleek, modern cosmetic bottle with a frosted light blue body and a glossy matching cap. The design is accented",
      price: "$60.0",
      color: "#ff0000",
      bgcolor: `#ff5404`,
    },
    {
      img: "make4.png",
      name: "A red pump bottle",
      info: "Anayase is a prominent online cosmetics shop in Bangladesh offering a range of beauty products, skincare and makeup.",
      price: "$99.0",
      color: "#ff0004",
      bgcolor: "#fa6be2",
    },
    {
      img: "make5.png",
      name: "Stylish Perfume Bottle",
      info: "This high quality and versatile heavy based glass bottle and atomiser combination makes it an ideal choice.",
      price: "$90.0",
      color: "#ff6020",
      bgcolor: "#f5b049",
    },
  ];

  return (
    <div className=" mt-[80px]">
      <h2 className=" font-[600] text-[23px]  ml-[20px] mb-[20px]">
        Get All beauty products from Anywhere
      </h2>
      {/* <div className="makeup flex">
        {product.map((item, i) => (
          <div
            key={i}
            className="h-[415px] w-[250px] border-[1px] ml-[20px] mt-[20px] rounded-[10px] overflow-hidden"
          >
            <div className={`h-[150px] bg-[${item.bgcolor}]`}></div>
            <div
              className={`h-[200px] w-[180px] bg-[${item.color}] absolute mt-[-150px] ml-[35px] rounded-b-full`}
            >
              <img
                src={item.img}
                alt=""
                className="h-[200px] mt-[40px] rotate-[15deg]"
              />
              <p
                className={`pl-[30px] bg-[${item.color}] text-[white] text-[30px] ml-[-35px] w-[180px] rounded-r-[60px] font-[600]`}
              >
                $90.0
              </p>
              <p className="font-[900] text-[16px] ml-[-5px] mt-[5px]">
                A Vibrant Red Lipstick
              </p>
              <p className="text-[11px] font-[700] w-[220px] ml-[-5px]">
                quotes and captions about red lipstick, fonts that mimic
                lipstick, or images of text written with lipstick, often used
                for.
              </p>
              <button
                className={`bg-[${item.color}] text-[13px] font-[600] py-[5px] px-[30px] rounded-[20px] mt-[15px] ml-[30px]`}
              >
                Buy now
              </button>
              <p className=" font-[700] absolute top-[40px] py-[5px] bg-white px-[35px] rounded-r-[10px] left-[-35px]">
                New
              </p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="makeup flex">
        <div className="h-[415px] w-[250px] border-[1px] ml-[20px] mt-[20px] rounded-[10px] overflow-hidden">
          <div className="h-[150px] bg-[#9d4bfa] "></div>
          <div className="h-[200px] w-[180px] bg-[#7700ff] absolute mt-[-150px] ml-[35px] rounded-b-full">
            <img
              src="/make1.png"
              alt=""
              className="h-[200px] mt-[40px] rotate-[15deg]"
            />
            <p className="pl-[30px] bg-[#7700ff] text-[white] text-[30px] ml-[-35px] w-[180px] rounded-r-[60px] font-[600]">
              $90.0
            </p>
            <p className="font-[900] text-[16px] ml-[-5px] mt-[5px]">
              A Vibrant Red Lipstick
            </p>
            <p className="text-[11px] font-[700] w-[220px] ml-[-5px]">
              quotes and captions about red lipstick, fonts that mimic lipstick,
              or images of text written with lipstick, often used for.
            </p>
            <button className="bg-[#7700ff] text-[13px] font-[600] py-[5px] px-[30px] rounded-[20px] mt-[15px] ml-[30px]">
              Buy now
            </button>
            <p className=" font-[700] absolute top-[40px] py-[5px] bg-white px-[35px] rounded-r-[10px] left-[-35px]">
              New
            </p>
          </div>
        </div>
        <div className="h-[415px] w-[250px] border-[1px] ml-[20px] mt-[20px] rounded-[10px] overflow-hidden">
          <div className="h-[150px] bg-[#b4ff8c] "></div>
          <div className="h-[200px] w-[180px] bg-[#59ff00] absolute mt-[-150px] ml-[35px] rounded-b-full">
            <img
              src="/make2.png"
              alt=""
              className="h-[230px] mt-[35px] rotate-[15deg]"
            />
            <p className="mt-[-25px] pl-[30px] bg-[#59ff00] text-[white] text-[30px] ml-[-35px] w-[180px] rounded-r-[60px] font-[600]">
              $120.0
            </p>
            <p className="font-[900] text-[16px] ml-[-5px] mt-[5px]">
              Elegant Perfume Bottle
            </p>
            <p className="text-[11px] font-[700] w-[220px] ml-[-5px]">
              A luxurious red perfume bottle with a sleek, cylindrical design.
              The glass body features vertical ridges that give it an.
            </p>
            <button className="bg-[#59ff00] text-[13px] font-[600] py-[5px] px-[30px] rounded-[20px] mt-[15px] ml-[30px]">
              Buy now
            </button>
            <p className=" font-[700] absolute top-[40px] py-[5px] bg-white px-[35px] rounded-r-[10px] left-[-35px]">
              New
            </p>
          </div>
        </div>
        <div className="h-[415px] w-[250px] border-[1px] ml-[20px] mt-[20px] rounded-[10px] overflow-hidden">
          <div className="h-[150px] bg-[#ff4d4d] "></div>
          <div className="h-[200px] w-[180px] bg-[#ff0000] absolute mt-[-150px] ml-[35px] rounded-b-full">
            <img
              src="/make4.png"
              alt=""
              className="h-[200px] mt-[40px] rotate-[15deg]"
            />
            <p className="pl-[30px] bg-[#ff0000] text-[white] text-[30px] ml-[-35px] w-[180px] rounded-r-[60px] font-[600]">
              $60.0
            </p>
            <p className="font-[900] text-[16px] ml-[-5px] mt-[5px]">
              A sleek cosmetic bottle
            </p>
            <p className="text-[11px] font-[700] w-[220px] ml-[-5px]">
              A sleek, modern cosmetic bottle with a frosted light blue body and
              a glossy matching cap. The design is accented
            </p>
            <button className="bg-[#ff0000] text-[13px] font-[600] py-[5px] px-[30px] rounded-[20px] mt-[15px] ml-[30px]">
              Buy now
            </button>
            <p className=" font-[700] absolute top-[40px] py-[5px] bg-white px-[35px] rounded-r-[10px] left-[-35px]">
              New
            </p>
          </div>
        </div>
        <div className="h-[415px] w-[250px] border-[1px] ml-[20px] mt-[20px] rounded-[10px] overflow-hidden">
          <div className="h-[150px] bg-[#fa6be2] "></div>
          <div className="h-[200px] w-[180px] bg-[#ff00d4] absolute mt-[-150px] ml-[35px] rounded-b-full">
            <img
              src="/make3.png"
              alt=""
              className="h-[200px] mt-[40px] rotate-[15deg]"
            />
            <p className="pl-[30px] bg-[#ff00d4] text-[white] text-[30px] ml-[-35px] w-[180px] rounded-r-[60px] font-[600]">
              $99.0
            </p>
            <p className="font-[900] text-[16px] ml-[-5px] mt-[5px]">
              A red pump bottle,
            </p>
            <p className="text-[11px] font-[700] w-[220px] ml-[-5px]">
              Anayase is a prominent online cosmetics shop in Bangladesh
              offering a range of beauty products, skincare and makeup.
            </p>
            <button className="bg-[#ff00d4] text-[13px] font-[600] py-[5px] px-[30px] rounded-[20px] mt-[15px] ml-[30px]">
              Buy now
            </button>
            <p className=" font-[700] absolute top-[40px] py-[5px] bg-white px-[35px] rounded-r-[10px] left-[-35px]">
              New
            </p>
          </div>
        </div>
        <div className="h-[415px] w-[250px] border-[1px] ml-[20px] mt-[20px] rounded-[10px] overflow-hidden">
          <div className="h-[150px] bg-[#f58b49] "></div>
          <div className="h-[200px] w-[180px] bg-[#ff6200] absolute mt-[-150px] ml-[35px] rounded-b-full">
            <img
              src="/make5.png"
              alt=""
              className="h-[200px] mt-[40px] rotate-[15deg]"
            />
            <p className="pl-[30px] bg-[#ff6200] text-[white] text-[30px] ml-[-35px] w-[180px] rounded-r-[60px] font-[600]">
              $90.0
            </p>
            <p className="font-[900] text-[16px] ml-[-5px] mt-[5px]">
              Stylish Perfume Bottle
            </p>
            <p className="text-[11px] font-[700] w-[220px] ml-[-5px]">
              This high quality and versatile heavy based glass bottle and
              atomiser combination makes it an ideal choice.
            </p>
            <button className="bg-[#ff6200] text-[13px] font-[600] py-[5px] px-[30px] rounded-[20px] mt-[15px] ml-[30px]">
              Buy now
            </button>
            <p className=" font-[700] absolute top-[40px] py-[5px] bg-white px-[35px] rounded-r-[10px] left-[-35px]">
              New
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beautyproducts;
