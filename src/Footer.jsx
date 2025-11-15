import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' container'>
        <div className=' flex justify-between mt-[50px]'>
            <div className=' w-[300px]'>
                <img className=' h-[100px]' src="logo.png" alt="" />
                <h3 className=' font-[600] text-[#3b3a3a] mb-[10px]'>Got a Question ? Call us 9 AM- 10 PM</h3>
                <p className=' text-[19px] font-[700] text-[#2e2d2d] hover:text-[#0842ffd8] cursor-pointer transition-all'>09753-6*****</p>
                <p className=' mt-[10px]  mb-[10px]'>Follow us on </p>
                <div>
                    <ul className=' flex gap-[10px]  mb-[15px]'> 
                       <a href=""><li className='p-[13px] text-[white]  bg-[#0842ffd8] rounded-full'><FaFacebookF className='' /></li></a> 
                        <a href=""><li className='p-[13px]  bg-[#08f7ffd8] rounded-full'><FaXTwitter /></li></a>
                        <a href=""><li className='p-[13px] text-[red]  bg-[#ff080870] rounded-full'><FaYoutube /></li></a>
                        <a href=""><li className='p-[13px] text-[#0842ffd8]  bg-[#008cff8e] rounded-full'><FaLinkedin /></li></a>
                    </ul>
                </div>
                <p className=' font-[400]'>See our reviews on - <span className=' font-[600]'>Trustpilot</span></p>
            </div>
            <div>
                <a className=' text-[17px] font-[600]' href="">Company</a>
                <ul className=' grid gap-[10px] mt-[20px]'>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">About us</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Career</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Contact Us</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href=""></a>Privacy Policy</li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Mart Certified</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Terms & Condition</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Next/Same day delivery TC</a></li>
                </ul>
            </div>
            <div>
               <a className=' text-[17px] font-[600]' href="">My Acount</a>
                <ul className=' grid gap-[10px] mt-[20px]'>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Sign in</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Orders</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Adressess</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href=""></a>My Wishlist </li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Order History </a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href=""> Track My Order</a></li>
                </ul>
            </div>
            <div>
               <a className=' text-[17px] font-[600]' href="">Customer services</a>
                <ul className=' grid gap-[10px] mt-[20px]'>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Payment Methods</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Support Center</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">How To Shop On Othoba</a></li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href=""></a>Featured Recommendation</li>
                    <li className=' text-[14px] font-[500] text-[#5e5b5b]'><a href="">Cancellation, Return & Refund</a></li>
                </ul>
            </div>
        </div>
        <div className=' flex justify-end'>
        <div className=' flex gap-15 py-[20px]'>
            <h2 className=' text-[15px] text-[#585757]'>We are using safe payment for -</h2>
            <img className=' h-[30px]' src="payment.png" alt="" />
        </div>            
        </div>

    </div>
  )
}

export default Footer