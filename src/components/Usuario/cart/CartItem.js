import axios from "axios";
import { useEffect, useState, useContext, useCallback } from "react";
import { DataItemsInCart } from "../../Context/UserContextCart";

const CartItem = ({ productincart }) => {
  const [item, setItem] = useState({});

  const {
    addProductIncart,
    deleteProductsIncart
  } = useContext(DataItemsInCart);

  const dataProduct = useCallback(async () => {
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_PRODUCTS_APP +
        "/" +
        productincart._id
    );
    const { data } = requestGet;
    setItem({
      nombre: data.nombre,
      precio: data.precio,
      img: data.img,
      descripcion: data.descripcion,
    });
    return data;
  }, [productincart._id]);
  
  useEffect(() => {
    dataProduct();
  }, [dataProduct]);



  return (
      <li className="space-y-[10px] border mx-[20px] rounded-[7px] mt-[30px] bg-white text-black p-[20px]">
        <p className="text-center mt-[5px] border-b-[1px] border-black mb-[15px] pb-[15px]">{item.nombre}</p>
        <img className="w-full rounded-[5px]" alt="" src={item.img} />
        <div className="flex space-x-10 justify-center">
        <button className="mb-[7px] px-[7px] mt-[7px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300"
          onClick={async () => {
            await addProductIncart(productincart._id);
          }}
        >
          Agregar
        </button>
        <button className="mb-[7px] px-[7px] mt-[7px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300"
          onClick={async () => {
            await deleteProductsIncart(productincart._id);
          }}
        >
          eliminar
        </button>
        <p className="mb-[5px] px-[5px] mt-[13px] h-[40px]">{productincart.quantity}</p>
        <p className="mb-[5px] px-[5px] mt-[13px] h-[40px] justify-self-end">{item.precio * productincart.quantity}</p>
        </div>
      </li>
  );
};

export default CartItem;
