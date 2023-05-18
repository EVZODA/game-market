import React from "react";
import { useEffect, useContext } from "react";
import { DataItemsInCart } from "../../Context/UserContextCart";
import apiInstance from "../../utils/utils";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
initMercadoPago("TEST-943446e1-e0b1-4f06-b1d2-893894eb2c11");

const CartPayment = () => {
  const { productsInCart, getProductsInCart } = useContext(DataItemsInCart);
  let token = localStorage.getItem("token");


  useEffect(() => {
    getProductsInCart();
  }, []);

  

  const initialization = {
    amount: 3,
    quantity: 0,
  };

  let dataProduct;

  const handlePayment = async () => {
    initialization.amount = 1;

    for (const product of productsInCart.items) {
      dataProduct = await apiInstance.get(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_PRODUCTS_APP +
          "/" +
          product._id
      );
      initialization.amount += dataProduct.data.precio * product.quantity;
      initialization.quantity = product.quantity;
    }
    initialization.amount -= 1;
    return dataProduct;
  };

  const onSubmit = async (formData) => {
    const datTime = localStorage.getItem("trafficLightTTL");

    console.log(datTime);

    const datPayment = await handlePayment();

    console.log(initialization);

    // callback llamado al hacer clic en el botón enviar datos
    const responseData = await apiInstance.post(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_PURCHASE_CARTITEMS,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

   

    if (
      responseData.data.status === "approved" &&
      responseData.data.status_detail === "accredited"
    ) {
      const historyPayments = {
        nombre: datPayment.data.nombre,
        amount: initialization.amount,
        quantity: initialization.quantity,
        trafficLightTTL: datTime,
      };

       await apiInstance.put(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_PRODUCTINCART_EDITED,
        {},
        {
          headers: {
            "x-token": token,
          },
        }
      );

      await apiInstance.post(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_HISTORIAL_PAYMENTS_APP,
        historyPayments,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      window.location = "/";
      alert("Su compra se ha realizado con exito");
    }
  };

  const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
        Callback llamado cuando Brick está listo.
        Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
      */
  };
  return (
    <div className="min-h-[900px] mt-[30px] lg:mb-[0px] mx-[17px]">
 <CardPayment
      initialization={initialization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
    </div>
  );
};

export default CartPayment;
