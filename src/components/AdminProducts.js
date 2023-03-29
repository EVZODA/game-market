import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AdminProductsPut from "./AdminProductsPut";
import AdminProductsPost from "./AdminProductsPost";
import AdminProductsDelete from "./AdminProductsDelete";
import AdminCategoriesPost from "./AdminCategoriesPost";
import AdminCategoriesPut from "./AdminCategoriesPut";
import AdminCategoriesDelete from "./AdminCategoriesDelete";

const url = "http://localhost:8080/api/productos/";

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
        <button className="mb-1 " onClick={() => setAction("postCategorie")}>
          Agregar categoria
        </button>
        <button className="mb-1 " onClick={() => setAction("putCategorie")}>
          Editar categoria
        </button>
        <button className="mb-1 " onClick={() => setAction("deleteCategorie")}>
          Eliminar Categoria
        </button>
      </div>
      <div>
        {action === "postProduct" ? <AdminProductsPost /> : ""}
        {action === "putProduct" ? <AdminProductsPut /> : ""}
        {action === "deleteProduct" ? <AdminProductsDelete /> : ""}
        {action === "postCategorie" ? <AdminCategoriesPost /> : ""}
        {action === "putCategorie" ? <AdminCategoriesPut /> : ""}
        {action === "deleteCategorie" ? <AdminCategoriesDelete /> : ""}
      </div>
    </div>
  );
};

export default AdminProducts;
