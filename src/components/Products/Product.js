import React from "react";
import { DataProductsProvider } from "../Context/UseContextEdition";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataItemsInCart } from "../Context/UserContextCart";
import apiInstance from "../utils/utils";

const Product = ({ product }) => {
  const usuario = localStorage.getItem("usuario");

  let navigate = useNavigate();

  const { setOneProducts } = useContext(DataProductsProvider);

  const { getProductsInCart } =
    useContext(DataItemsInCart);

  const addProductIncart = async (productid) => {
    const cartItem = await getProductsInCart();
    let itemInCart = cartItem?.items?.find((item) => item._id == productid);

    const token = localStorage.getItem("token");

    if (!itemInCart) {
       await apiInstance.post(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_OBTENER_CARRITO +
          productid,
        {},
        {
          headers: {
            "x-token": token,
          },
        }
      );
    } else {
      await apiInstance.put(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_OBTENER_CARRITO +
          productid,
        {},
        {
          headers: {
            "x-token": token,
          },
        }
      );
    }
    await getProductsInCart();
  };

  const deleteProductsIncart = async (productid) => {
    const token = localStorage.getItem("token");

    await apiInstance.delete(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_OBTENER_CARRITO +
        productid,
      {
        headers: {
          "x-token": token,
        },
      }
    );
    await getProductsInCart();
  };

  return (
    <div className="">
      <li className="">
        {product.nombre} {product.precio} {product.descripcion} <img alt="" src={product.img}/>
        {usuario === "ADMIN_ROLE" ? (
          <button
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
        {usuario === "USER_ROLE" ? (
          <button
            onClick={() => {
              addProductIncart(product._id);
            }}
          >
            Agregar producto al carro
          </button>
        ) : (
          ""
        )}
        {usuario === "USER_ROLE" ? (
          <button
            onClick={() => {
              deleteProductsIncart(product._id);
            }}
          >
            Eliminar producto al carro
          </button>
        ) : (
          ""
        )}
      </li>
    </div>
  );
};

export default Product;
