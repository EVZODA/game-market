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
    <div className="flex flex-col space-y-[7px] px-[8px] items-center justify-start h-[600px]">

      <input onChange={(e)=>{handleName(e)}} className='py-2 mt-[40px] w-[350px] border-[1px] border-black rounded-[3px]' placeholder="nombre nuevo" />
        <button onClick={handlePut} className='px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300'>Editar</button>
    </div>
  );
};

export default AdminCategoriesPut