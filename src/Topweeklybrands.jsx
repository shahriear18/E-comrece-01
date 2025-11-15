import React from "react";
import Slider from "react-slick";

const Topweeklybrands = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  let brands = [
    {
      name: "Vision Electronics LTD",
      logo: "brandlogo1.jpeg",
      Products: "473",
      img1: "vision1.jpeg",
      img2: "vision2.jpeg",
      img3: "vision3.jpeg",
    },
    {
      name: "Realme",
      logo: "brandlogo2.jpeg",
      Products: "105",
      img1: "realme1.webp",
      img2: "realme2.jpeg",
      img3: "realme3.jpeg",
    },
    {
      name: "Playtime distribution",
      logo: "brandlogo3.jpeg",
      Products: "125",
      img1: "playtime1.webp",
      img2: "playtime2.jpeg",
      img3: "playtime3.jpeg",
    },
    {
      name: "Topper",
      logo: "brandlogo4.jpeg",
      Products: "441",
      img1: "topper1.jpeg",
      img2: "topper2.jpeg",
      img3: "topper3.jpeg",
    },
    {
      name: "Dailly shoping",
      logo: "brandlogo5.jpeg",
      Products: "4777",
      img1: "daily1.jpeg",
      img2: "daily2.jpeg",
      img3: "daily3.jpeg",
    },
    {
      name: "duranta Distribution",
      logo: "brandlogo6.jpeg",
      Products: "223",
      img1: "duranto1.webp",
      img2: "duranto2.webp",
      img3: "duranto3.webp",
    },
    {
      name: "Regal Distribution",
      logo: "brandlogo7.jpeg",
      Products: "1285",
      img1: "regal1.webp",
      img2: "regal2.webp",
      img3: "regal3.webp",
    },
    {
      name: "Winter Fashion shop",
      logo: "brandlogo8.jpeg",
      Products: "1380",
      img1: "winter1.jpeg",
      img2: "winter2.jpeg",
      img3: "winter3.jpeg",
    },
  ];
  return (
    <div className=" container">
      <div className=" h-[] bg-[]">
        <p className=" text-[25px] font-[600] mb-[50px] text-[#424141]">Top Weekly Brands</p>
          <Slider {...settings}>
        {
            brands.map((item,i) =>(
        <div className=" h-[] w-[300px] overflow-hidden">
          <div className=" h-[230px] w-[350px] bg-[#]">
            <div className=" flex">
              <div className="">
                <img className=" h-[50px] max-w-[100px]" src={item.logo} alt="" />
              </div>
              <div className=" ml-[20px]">
                <h2 className=" text-[17px] font-[600] mt-[5px]">
                  {item.name}
                </h2>
                <p>({item.Products}) products</p>
              </div>
            </div>
            <div className=" flex gap-3 mt-[20px]">
            <img className="h-[80px]" src={item.img1} alt="" />
            <img className="h-[80px]"  src={item.img2} alt="" />
            <img className="h-[80px]"  src={item.img3} alt="" />
            </div>
          </div>
        </div>
            ))
        }            
          </Slider>


      </div>
    </div>
  );
};

export default Topweeklybrands;
