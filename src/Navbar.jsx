import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { getDatabase, ref, onValue } from "firebase/database";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "cartcount/");

    const unsub = onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCartCount(data.count); // firebase e jei count ache seta state e boshao
      }
    });

    return () => unsub();
  }, []);

  let navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  let [showprofile, setshowprofile] = useState(false);
  // console.log(user);
  // let [available, setavailable] = useState(false);
  // if (user) {
  //   setavailable(true);
  // }
  const handleprofilecheck = () => {
    setshowprofile(!showprofile);
  };
  let handlelogout = () => {
    localStorage.removeItem("user");
    dispatch(userInfo(null));
    navigate("/");
  };
  return (
    <div>
      <header className="h-[60px] bg-[#0841ff94] sticky top-0">
        <div className="container">
          <nav className="flex items-center h-[60px] justify-between">
            <div>
              <img className="h-[90px]" src="logo.png" alt="" />
            </div>
            <div className=" flex items-center h-[60px]">
              {" "}
              <i className="fa-solid fa-magnifying-glass text-[#742ff5] absolute ml-[10px]"></i>{" "}
              <input
                className="py-[10px] bg-[white] w-[600px] px-[40px] text-[black] outline-none placeholder:text-[14px] rounded-[5px]"
                type="text"
                placeholder="Search hear..."
              />
            </div>
            <div className="flex">
              {user ? (
                <>
                  <div className="flex  items-center justify-center gap-[20px] text-[white] ml-[80px] pr-[80px]">
                    <div className="grid items-center ">
                      <i className="fa-regular fa-heart text-[20px] ml-[8px]"></i>
                      <p className="text-[13px]">Wishlist</p>
                    </div>
                    <div className="grid items-center justify-center">
                      <i className="fa-solid fa-cart-shopping text-[20px] ml-[-2px]"></i>
                      <p className="">
                        Cart
                        <span className="mt-[-55px] ml-[7px] absolute bg-[#0044ff] px-[7px] flex justify-center items-center rounded-2xl">
                          {cartCount}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={handleprofilecheck}
                    className=" flex items-center gap-4 bg-[#ffffff34] p-[10px] cursor-pointer"
                  >
                    <div className="h-[50px] w-[50px] bg-[red] rounded-full overflow-hidden">
                      <img
                        className="mt-[-15px]"
                        src="https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/518275347_710773948484742_3993082592097358562_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JcWUB5zkSygQ7kNvwEKB3Xf&_nc_oc=Adl2P6ie8nSX3xmImA9jT9VSguryIMyhp2a1rjNHPKAco_SrYbDPfcIRdkmSn7R2xq4&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_gid=60vD0b3ZMmv3nOcHcbonaQ&oh=00_Afka3wTUD83AYeDwusEHUk6vGG5Hf5-lM--sNGKsGoeAPQ&oe=69400F2E"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text-[white]">{user.displayName}</h2>
                      <h3 className=" text-[#ffffff69] text-[12px]">
                        {user.email}
                      </h3>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-[15px] items-center">
                    <div className="">
                      <i className="text-[white] fa-solid fa-user  text-[13px]"></i>
                      <a className="text-[white] text-[13px] " href="/signin">
                        Sign in
                      </a>
                      <p className=" absolute text-[white] ml-[61px] mt-[-25px]">
                        |
                      </p>
                    </div>
                    <div>
                      <a
                        className="text-[white]  text-[13px] "
                        href="/register"
                      >
                        Register
                      </a>
                    </div>
                  </div>
                  <div className="flex  items-center justify-center gap-[20px] text-[white] ml-[80px]">
                    <div className="grid items-center ">
                      <i className="fa-regular fa-heart text-[20px] ml-[8px]"></i>
                      <p className="text-[13px]">Wishlist</p>
                    </div>
                    <div className="grid items-center justify-center">
                      <i className="fa-solid fa-cart-shopping text-[20px] ml-[-2px]"></i>
                      <p className=" after:content-['0'] after:absolute after:w-[20px] after:h-[20px] after:bg-[#0084ff] after:rounded-[50px] after:items-center after:justify-center after:flex after:mt-[-50px] after:ml-[10px] after:font-[700]  text-[13px] before:content-[''] before:absolute before:h-[40px] before:w-[1px] before:bg-[#ffffff] before:ml-[-100px] before:mt-[-20px]">
                        Cart
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>
        <div
          style={{
            marginTop: showprofile ? "0px" : "-460px",
            transition: "0.3s ease-in-out",
          }}
          className="z-50 shadow-2xl shadow-black/50 h-[400px] w-[350px] absolute right-0 p-[10px] rounded-lg backdrop-blur-md bg-[#ffffff77]"
        >
          <div className=" flex items-center ml-[20px] gap-3">
            <div className=" h-[70px] w-[70px] rounded-full overflow-hidden">
              <img
                className="mt-[-15px]"
                src={
                  "https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/518275347_710773948484742_3993082592097358562_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JcWUB5zkSygQ7kNvwEKB3Xf&_nc_oc=Adl2P6ie8nSX3xmImA9jT9VSguryIMyhp2a1rjNHPKAco_SrYbDPfcIRdkmSn7R2xq4&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_gid=60vD0b3ZMmv3nOcHcbonaQ&oh=00_Afka3wTUD83AYeDwusEHUk6vGG5Hf5-lM--sNGKsGoeAPQ&oe=69400F2E"
                }
                alt=""
              />
            </div>
            <div>
              <h2 className="text-[#1a1919]">{user.displayName}</h2>
              <h3 className=" text-[#00000069] text-[12px]">{user.email}</h3>
            </div>
          </div>
          <div>
            <ul className=" grid gap-7 mt-[30px] ml-[20px]">
              <li className="cursor-pointer flex items-center font-[400] text-[15px] gap-2 tracking-[0.5px]">
                {" "}
                <CgProfile size={20} /> View Profile
              </li>
              <li className="cursor-pointer flex items-center font-[400] text-[15px] gap-2 tracking-[0.5px]">
                {" "}
                <IoSettings size={20} /> Settings And Privacy
              </li>
              <li className="cursor-pointer flex items-center font-[400] text-[15px] gap-2 tracking-[0.5px]">
                {" "}
                <FaCircleQuestion size={20} /> Help and support
              </li>
              <li className="cursor-pointer flex items-center font-[400] text-[15px] gap-2 tracking-[0.5px]">
                {" "}
                <FaCartShopping size={20} /> View Cart details
              </li>
              <li
                onClick={handlelogout}
                className="cursor-pointer flex items-center font-[400] text-[15px] gap-2 tracking-[0.5px]"
              >
                {" "}
                <RiLogoutBoxRLine size={20} /> Log out
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
