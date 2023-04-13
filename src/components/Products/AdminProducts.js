import React from "react";
import { useState } from "react";
import AdminProductsPut from "./AdminProductsPut";
import AdminProductsPost from "./AdminProductsPost";
import AdminProductsDelete from "./AdminProductsDelete";


const AdminProducts = () => {
  const [action, setAction] = useState("");

  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="controllercontainer space-x-7 mt-[50px]">
        <button className="mb-1 " onClick={() => setAction("postProduct")}>
          Agregar producto
        </button>
        <button className="mb-1 " onClick={() => setAction("putProduct")}>
          Editar producto
        </button>
        <button className="mb-1 " onClick={() => setAction("deleteProduct")}>
          Eliminar producto
        </button>
      </div>
      <div>
        {action === "postProduct" ? <AdminProductsPost /> : ""}
        {action === "putProduct" ? <AdminProductsPut /> : ""}
        {action === "deleteProduct" ? <AdminProductsDelete /> : ""}
      </div>
    </div>
  );
};

export default AdminProducts;
