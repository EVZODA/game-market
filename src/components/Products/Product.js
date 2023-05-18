import React from "react";
import { DataProductsProvider } from "../Context/UseContextEdition";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataItemsInCart } from "../Context/UserContextCart";

const Product = ({ product }) => {
  const usuario = localStorage.getItem("usuario");
  const token = localStorage.getItem("token")

  let navigate = useNavigate();

  const { setOneProducts } = useContext(DataProductsProvider);

  const {
    addProductIncart,
    deleteProductsIncart,
    productsInCart,
    getProductsInCart,
  } = useContext(DataItemsInCart);
  useEffect(() => {
    if (usuario === "USER_ROLE" && token){
      getProductsInCart()
    }
  }, []);



  const isInCart = () => {
    const existProduct = productsInCart?.items?.find(
      (productincart) => productincart._id == product._id
    );
    if (existProduct) return true;
    else return false;
  };

  isInCart();

  return (
    <li className="flex flex-col items-center mx-[20px] rounded-[7px] border-black bg-white text-black p-[15px] min-w-[300px]">
      <p className="mb-[15px] pb-[15px] border-b-[1px] border-black text-center w-[100%]">
        {product.nombre}
      </p>{" "}
      <div className="container-img relative h-[100px] w-[180px] rounded-[8px] overflow-hidden">
        <img
          className="h-full w-full object-cover mb-[10px]"
          alt=""
          src={product.img}
        />{" "}
        <div className="container-description absolute h-full w-full bg-white top-0">
          <p className="mb-[10px] text-white text-center">
            {product.descripcion}
          </p>
        </div>
      </div>
      <p className="my-[15px]">$ {product.precio}</p>
      {token?<div>
      {usuario === "ADMIN_ROLE" ? (
        <button
          className="mb-[10px] px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300"
          onClick={() => {
            setOneProducts(product);
            navigate("/adminproducts");
          }}
        >
          {" "}
          Configuracion del producto
        </button>
      ) : (
        ""
      )}
      {usuario==="USER_ROLE"?<>
      {!isInCart()? (
        <button
          className="mb-[10px] px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300"
          onClick={() => {
            addProductIncart(product._id);
          }}
        >
          Agregar producto al carro
        </button>
      ) : (
        <button
        className="mb-[10px] px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300"
        onClick={()=>navigate("/cart")}
      >
        Ver el carrito
      </button>
      )} </>:""}
      </div>: ""}
    </li>
  );
};

export default Product;
