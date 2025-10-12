import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="h-[60px] bg-[#0841ff94]">
        <div className="container">
          <nav className="flex items-center h-[60px] justify-between">
            <div>
              <img className="h-[90px]" src="logo.png" alt="" />
            </div>
            <div className=" flex items-center h-[60px]">
              {" "}
              <i class="fa-solid fa-magnifying-glass text-[#742ff5] absolute ml-[10px]"></i>{" "}
              <input
                className="py-[10px] bg-[white] w-[600px] px-[40px] text-[black] outline-none placeholder:text-[14px] rounded-[5px]"
                type="text"
                placeholder="Search hear..."
              />
            </div>
            <div className="flex">
              <div className="flex gap-[15px] items-center">
                <div className="">
                  <i className="text-[white] fa-solid fa-user  text-[13px]"></i>
                  <a className="text-[white] text-[13px] " href="">
                    Sign in
                  </a>
                  <p className=" absolute text-[white] ml-[61px] mt-[-25px]">
                    |
                  </p>
                </div>
                <div>
                  <a className="text-[white]  text-[13px] " href="">
                    Register
                  </a>
                </div>
              </div>
              <div className="flex  items-center justify-center gap-[20px] text-[white] ml-[80px]">
                <div className="grid items-center ">
                  <i class="fa-regular fa-heart text-[20px] ml-[8px]"></i>
                  <p className="text-[13px]">Wishlist</p>
                </div>
                <div className="grid items-center justify-center">
                  <i class="fa-solid fa-cart-shopping text-[20px] ml-[-2px]"></i>
                  <p className=" after:content-['0'] after:absolute after:w-[20px] after:h-[20px] after:bg-[#0084ff] after:rounded-[50px] after:items-center after:justify-center after:flex after:mt-[-50px] after:ml-[10px] after:font-[700]  text-[13px] before:content-[''] before:absolute before:h-[40px] before:w-[1px] before:bg-[#ffffff] before:ml-[-100px] before:mt-[-20px]"  >Cart</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
