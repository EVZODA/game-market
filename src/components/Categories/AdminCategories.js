import React from 'react'
import { useState, useContext, useEffect } from 'react';
import AdminCategoriesPost from './AdminCategoriesPost';
import AdminCategoriesPut from './AdminCategoriesPut';
import AdminCategoriesDelete from './AdminCategoriesDelete';
import {DataProductsProvider} from '../Context/UseContextEdition'

const AdminCategories = () => {
    const [action, setAction] = useState("");
    const { OneCategories, setOneCategories} = useContext(DataProductsProvider)

    useEffect(() => {
      setOneCategories(OneCategories)
    
      return () => {
        setOneCategories(null)
      }
    }, [])
  
    return (
      <div className="flex flex-col  items-center justify-start bg-slate-50 min-h-[100vh]">
        <div className="mt-[50px] flex flex-col">
           <button className="btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={() => setAction("postCategorie")}>
            Agregar categoria
          </button>
          {OneCategories===null?"" : <button className="btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={() => setAction("putCategorie")}>
            Editar categoria
          </button>}
          {OneCategories===null?"" : <button className="btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={() => setAction("deleteCategorie")}>
            Eliminar Categoria
          </button>}
        </div>
        <div className=''>
          {action === "postCategorie" ? <AdminCategoriesPost /> : ""}
          {action === "putCategorie" ? <AdminCategoriesPut /> : ""}
          {action === "deleteCategorie" ? <AdminCategoriesDelete /> : ""}
        </div>
      </div>
    );
  };

  export default AdminCategories;