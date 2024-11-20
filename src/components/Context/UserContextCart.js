import { useState, createContext } from "react";
import apiInstance from "../utils/utils";

export const DataItemsInCart = createContext();

const UserContextCart = (props) => {
  let token = localStorage.getItem("token");

  const [productsInCart, setProductsInCart] = useState({});

  const [precioTotal, setPrecioTotal] = useState(0);

  let carrito;

  const AcumuladorTotal = async (carrito) => {
    let total = 0;
    for (const product of carrito.items) {
      const requestGet = await apiInstance.get(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_PRODUCTS_APP +
          "/" +
          product._id
      );
      const { data } = requestGet;
      total = total + product.quantity * data.precio;
    }
    setPrecioTotal(total);
  };

  const getProductsInCart = async () => {
    const requestGet = await apiInstance.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_OBTENER_CARRITO,
      {
        headers: {
          "x-token": token,
        },
      }
    );
    const { data } = requestGet;
    setProductsInCart(data.usuarioIncart);
    return data.usuarioIncart;
  };

  const addProductIncart = async (productid) => {
    const cartItem = await getProductsInCart();
    let itemInCart = cartItem?.items?.find((item) => item._id === productid);

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

    carrito = await getProductsInCart();
    AcumuladorTotal(carrito);
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
    carrito = await getProductsInCart();
    AcumuladorTotal(carrito);
  };

  return (
    <DataItemsInCart.Provider
      value={{
        productsInCart,
        setProductsInCart,
        getProductsInCart,
        deleteProductsIncart,
        addProductIncart,
        precioTotal,
        AcumuladorTotal,
      }}
    >
      {props.children}
    </DataItemsInCart.Provider>
  );
};

export default UserContextCart;
