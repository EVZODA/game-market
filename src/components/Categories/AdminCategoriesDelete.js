import React from "react";
import { useContext } from "react";
import { DataProductsProvider } from "../Context/UseContextEdition";
import apiInstance from "../utils/utils";

const AdminCategoriesDelete = () => {
 


  const { OneCategories, setOneCategories} = useContext(DataProductsProvider)

  

  const handleDelete = async () => {
    
    let token = localStorage.getItem("token") || "";
  
      await apiInstance.delete(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_CATEGORIES_APP +
          "/" +
         OneCategories._id,
        {
          headers: {
            "x-token": token,
          },
        }
      );
  };

  

  return (
    <div>
      <div className="flex">
        <input
          placeholder="Categoria a eliminar"
          value={OneCategories.nombre}
        />
      
      </div>
      <div>
        <button onClick={handleDelete}>eliminar</button>
      </div>
    </div>
  );
};

export default AdminCategoriesDelete;
