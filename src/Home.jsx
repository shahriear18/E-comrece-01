import React from "react";
import Banerslider from "./Banerslider";
import DeliveryOption from "./DeliveryOption";
import Afterbaneradd from "./Afterbaneradd";
import Hotdealsslider from "./Hotdealsslider";
import Bigbanners from "./Bigbanners";
import TrendingProducts from "./TrendingProducts";
import Poster from "./Poster";
import Recomendedproducts from "./Recomendedproducts";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className=" flex justify-between mt-[20px] baner-sections">
          <div className=" grid justify-center items-center ">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] w-[100px]">
              GLOBAL FINDS
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] text-center">
              QUICK <br /> COMMERCE
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] text-center">
              SMARTPHONE
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] text-center ">
              SMARTPHONE
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] text-center ">
              ELECTRONICS <br /> & APLIENCES
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] text-center ">
              MEN
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] text-center">
              WOMEN
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px]  text-center">
              FURNITRE
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] text-center ">
              BEAUTY
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px]  text-center">
              BABY CARE
            </p>
          </div>
          <div className=" grid justify-center items-center">
            <div className="h-[90px] w-[90px] bg-[red] rounded-[50px]"></div>
            <p className=" text-[12px] font-[400]  mt-[10px] text-center">
              TOYS
            </p>
          </div>
        </div>
        <div className="flex">
          <Banerslider />
          <div className="baner-right ml-[20px]">
            <div className=" baner-right-img1 ml-[20px] mt-[22px] rounded-[5px]">
              <img className="h-[130px]" src="baner13.gif" alt="" />
            </div>
            <div className=" baner-right-img2 ml-[20px] mt-[10px] rounded-[5px]">
              <img className="h-[130px]" src="baner14.jpeg" alt="" />
            </div>
            <div className="flex">
              <div className=" baner-right-img3 mt-[10px] ml-[20px]">
                <img className="h-[160px]" src="baner15.jpeg" alt="" />
              </div>
              <div className=" baner-right-img4 mt-[10px] ml-[20px]">
                <img className="h-[160px]" src="baner16.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeliveryOption/>
      <Afterbaneradd/>
      <Hotdealsslider/>
      <Bigbanners/>
      <TrendingProducts/>
      <Poster/>
      <Recomendedproducts/>
    </div>
  );
};

export default Home;
