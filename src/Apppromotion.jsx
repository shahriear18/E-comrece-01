import React from "react";
import { CiMail } from "react-icons/ci";

const Apppromotion = () => {
    let handledownload = () =>{
        alert("The app is not ready for download")
    }
  return (
    <div  className=" bg-[#0842ffd8] text-[white] justify-between flex py-[30px] px-[20px]">
      <div className=" flex gap-3">
        <CiMail  size={50}/>
        <div >
          <h2 className=" text-[20px] font-[600] cursor-pointer">Subscribe To Our Newsletter</h2>
          <h2 className="  cursor-pointer">Get all the latest information on Events, Sales and Offers.</h2>
        </div>
      </div>
      <div className=" flex gap-3 items-center">
        <div>
          <h2  className=" text-[20px] font-[600]  cursor-pointer">Download our new app today!</h2>
          <h2 className="  cursor-pointer">Dont Miss our mobile-only offers and shop with Android Play.</h2>
        </div>
        <button
        onClick={handledownload}
         className="font-[700] py-[7px] px-[30px] text-[white] border border-[white]">Download</button>
      </div>
    </div>
  );
};

export default Apppromotion;
