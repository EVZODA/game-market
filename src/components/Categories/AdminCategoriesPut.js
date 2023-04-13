import React from 'react';
import { useContext } from 'react';
import apiInstance from '../utils/utils';
import { DataProductsProvider } from '../Context/UseContextEdition';



const AdminCategoriesPut= () => {



  const { OneCategories, setOneCategories} = useContext(DataProductsProvider)


  const handleName = (e) => {
    setOneCategories({
      ...OneCategories,
      nombre: e.target.value
    })
  }

  const handlePut = async () =>{
    let token = localStorage.getItem("token") || "";


     await apiInstance.put (
        process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_CATEGORIES_APP + "/"
        + OneCategories._id,
        OneCategories,
        {
          headers: {
            "x-token": token,
          },
        }
      )
  }



  return (
    <div className="flex flex-col space-y-[7px] px-[8px] items-center justify-center h-[500px]">
      <div className='flex flex-col justify-center items-center'>
      <input onChange={(e)=>{handleName(e)}} className='border-[2px] border-[#8a5422] w-[400px] mr-[20px]' placeholder="nombre nuevo" />
        <button onClick={handlePut} className='border-[2px] border-[#8a5422] w-[400px] mr-[20px]'>Editar</button>
      </div>
    </div>
  );
};

export default AdminCategoriesPut