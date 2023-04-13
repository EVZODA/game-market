import React from 'react'
import { useState } from 'react';
import AdminCategoriesPost from './AdminCategoriesPost';
import AdminCategoriesPut from './AdminCategoriesPut';
import AdminCategoriesDelete from './AdminCategoriesDelete';

const AdminCategories = () => {
    const [action, setAction] = useState("");
  
    return (
      <div className="flex flex-col  items-center justify-center">
        <div className="controllercontainer space-x-7 mt-[50px]">
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
          {action === "postCategorie" ? <AdminCategoriesPost /> : ""}
          {action === "putCategorie" ? <AdminCategoriesPut /> : ""}
          {action === "deleteCategorie" ? <AdminCategoriesDelete /> : ""}
        </div>
      </div>
    );
  };

  export default AdminCategories;