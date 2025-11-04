import React from 'react'
import { FiTruck } from "react-icons/fi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";


const DeliveryOption = () => {
  return (
    <div className=' container'>
      <div className=' h-[100px] flex justify-around mt-[30px]'>
        <div className=' flex items-center gap-3'><FiTruck size={33} className=' text-[#333333]'/><div className=''><p className=' font-[600] text-[17px]'>Cancelation & Return</p ><p className=' text-[14px] text-[#0000009f]'>If Product Not matched</p></div></div>
        <div  className=' flex items-center gap-3'><i className="fa-solid fa-briefcase text-[30px]  text-[#333333]"></i> <div><p className=' font-[600] text-[17px]'>Privacy Policy</p><p className=' text-[14px] text-[#0000009f]'>Check before dealing</p></div></div>
        <div className=' flex items-center gap-3'><FaMoneyCheckAlt size={33} className=' text-[#333333]' /><div><p className=' font-[600] text-[17px]'>Emi Policy</p><p className=' text-[14px] text-[#0000009f]'>We Provide 0% EMI facelities</p></div></div>
        <div className=' flex items-center gap-3'><LuMessageSquareText size={33} className=' text-[#333333]' /><div><p className=' font-[600] text-[17px]'>Customer Support</p> <p className=' text-[14px] text-[#0000009f]'>Call us at 096*******</p></div></div>
      </div>
    </div>
  )
}

export default DeliveryOption