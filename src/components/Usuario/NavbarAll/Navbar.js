import React from "react";
import { useState } from "react";
import Burguer from "./Burguer";
import steamimg from "../../../img/steamlogo.svg";
import { Link } from "react-router-dom";
import Search from "./Search";
import ProfileUser from "../UsuarioConfig/ProfileUser";
import CartUser from "../cart/CartUser"

const Navbar = () => {
  const [open, setopen] = useState(true);

  const token = localStorage.getItem("token")
  const adminRole = localStorage.getItem("usuario")

  return (
    <div className="h-auto flex flex-col lg:flex lg:flex-row justify-between px-[25px] bg-yellow-200 bg-cover items-center border-b-[1px] border-black ">
      <div className="contain-logo lg:space-x-[25px] my-[25px] ">
        <Link to="/">
          <img className="w-[70px]" src={steamimg} />
        </Link>
      </div>
      <ProfileUser></ProfileUser>
     <Search></Search>
    <CartUser></CartUser>
      <Burguer setopen={setopen} open={open}></Burguer>
    
      <div 
        className={` z-50 absolute flex flex-col items-start rounded-[7px] bg-white top-[700px] lg:top-[90px] px-[80px] sm:px-[100px] py-[20px] transition-all duration-[1000ms] ease-in-out ${
          open === true ? "lg:-right-[500px] -top-[700px]" : `${token? "lg:right-[17px] top-[460px]": "lg:right-[17px] top-[358px]"}`
        } `}
      >
       <div className="mx-[20px]">
          <Link to="/productsection">Inicio</Link>
        </div>
        <div className="mx-[20px]">
          {!token?<Link to="/register">Registrarse</Link>: ""}
        </div>
        <div className="mx-[20px]">
        {!token?<Link to="/login">Iniciar sesion</Link>: ""}
        </div>
        <div className="mx-[20px]">
        {token?<Link to="/historialPayments">Historial de compras</Link>: ""}
        </div>
        <div className="mx-[20px]">
          <Link to="/productsection">Productos</Link>
        </div>
        <div className="mx-[20px]">
          {adminRole==="ADMIN_ROLE"?<Link to="/adminproducts">Agregar producto</Link>: ""}
        </div>
        <div className="mx-[20px]">
        {adminRole==="ADMIN_ROLE"?<Link to="/categoriesection">Configuracion de las categorias</Link>: ""}
        </div>
        <div className="mx-[20px]">
        {adminRole==="ADMIN_ROLE"?<Link to="/admincategories">Agregar categoria</Link>: ""}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
