import { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Rootlayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <h2>Footer</h2>
    </>
  );
};

export default Rootlayout;
