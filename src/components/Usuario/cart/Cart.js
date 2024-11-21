import { useEffect, useContext } from "react";
import CartItem from "./CartItem";
import { DataItemsInCart } from "../../Context/UserContextCart";
import CartPayment from "./CartPayment";

const Cart = () => {
  
  const { productsInCart, getProductsInCart, precioTotal, AcumuladorTotal } = useContext(DataItemsInCart);



  useEffect(() => {
    (async () => {
      const carrito = await getProductsInCart();
      AcumuladorTotal(carrito);
    })();
  }, []);

  return (
    <>
    {productsInCart?.items?.length !== 0? <div className="flex flex-col items-center bg-slate-200 ">
    <div className="flex flex-col items-center min-h-[100vh]">
      <ul className="mb-[20px] lg:w-[450px] w-[400px] flex flex-col space-y-6">
        {productsInCart?.items?.map((productincart, index) => (
          <CartItem
            key={index}
            productincart={productincart}
          ></CartItem>
          
        ))}
         
      </ul>
       <div className="w-[365px] lg:w-[415px] justify-between flex border rounded-[7px] bg-white text-black p-[20px]">
      <p className="">Precio total</p>
  <p className="pr-[30px]">{precioTotal}</p>
 
    
  </div>
      <CartPayment></CartPayment>
    </div>
 </div> : <div className="flex items-center bg-slate-200 min-h-[100vh] justify-center"><p className=" text-4xl">No hay elementos en el carrito</p></div>}
 </>
  );
};

export default Cart;
