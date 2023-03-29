import React from "react";
import { useState } from "react";
import Burguer from "./Burguer";
import steamimg from "../img/logosteam.jpg";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import ProfileUser from "./ProfileUser";

const Navbar = () => {
  const [open, setopen] = useState(true);

  return (
    <div className="Container-navbar flex justify-between px-[25px] bg-cyan-100 bg-cover">
      <div className="contain-logo space-x-[25px] my-[25px]">
        <Link to="/inicio">
          <img className="w-[70px]" src={steamimg} />
        </Link>
      </div>
     <Search></Search>
    <ProfileUser></ProfileUser>
      <Burguer setopen={setopen} open={open}></Burguer>
      <div
        className={`absolute flex flex-col items-center right-[17px] top-[70px] bg-orange-200 px-[100px] py-[20px] transition-all duration-[1000ms] ease-in-out ${
          open === true ? "-right-[500px]" : ""
        } `}
      >
        <div className="mx-[20px]">
          <Link to="/register">Register</Link>
        </div>
        <div className="mx-[20px]">
          <Link to="/login">Login</Link>
        </div>
        <div className="mx-[20px]">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="mx-[20px]">
          <Link to="/productsection">Productos</Link>
        </div>
        <div className="mx-[20px]">
          <Link to="/adminproducts">Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
