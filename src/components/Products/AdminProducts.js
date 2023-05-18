import React from "react";
import { useState,useEffect, useContext } from "react";
import AdminProductsPut from "./AdminProductsPut";
import AdminProductsPost from "./AdminProductsPost";
import AdminProductsDelete from "./AdminProductsDelete";
import { DataProductsProvider } from "../Context/UseContextEdition";


const AdminProducts = () => {
  const [action, setAction] = useState("");
  const { setOneProducts, OneProducts } = useContext(DataProductsProvider);
  
  useEffect(() => {
    setOneProducts(OneProducts)
  
    return () => {
      setOneProducts(null)
    }
  }, [])
  

  return (
    <div className="flex flex-col  items-center justify-start  bg-slate-50 min-h-[100vh]">
      <div className="controllercontainer space-x-7 mt-[50px]">
       <button className="btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={() => setAction("postProduct")}>
          Agregar producto 
        </button>
        {OneProducts===null?"": <button className="btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={() => setAction("putProduct")}>
          Editar producto 
        </button>}
        {OneProducts===null?"": <button className="btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={() => setAction("deleteProduct")}>
          Eliminar producto
        </button>}
      </div>
      <div>
        {action === "postProduct" ? <AdminProductsPost /> : ""}
        {action === "putProduct"? <AdminProductsPut /> : ""}
        {action === "deleteProduct"? <AdminProductsDelete /> : ""}
      </div>
    </div>
  );
};

export default AdminProducts;
