import React from "react";

const Bigbanners = () => {
  let bigbannerimgs1 = [
    {
      img: "bigimg1.jpeg",
    },
    {
      img: "bigimg2.jpeg",
    },
  ];
  let bigbannerimgs2 = [
    {
      img: "bigimg3.jpeg",
    },
    {
      img: "bigimg4.jpeg",
    },
    {
      img: "bigimg5.jpeg",
    },
  ];
  return (
    <div className=" container">
      <div className=" mt-[70px] ">
        <div className=" flex ">
          {bigbannerimgs1.map((item, i) => (
            <img key={i} className=" w-[630px] rounded-[10px]" src={item.img} alt="" />
          ))}
        </div>
        <div className=" flex mt-[30px] gap-7">
          {bigbannerimgs2.map((item, i) => (
            <img key={i} className=" w-[400px] rounded-[10px]" src={item.img} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bigbanners;
