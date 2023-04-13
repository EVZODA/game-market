import React from 'react'
import { useContext } from 'react'

import { DataProductsProvider } from '../Context/UseContextEdition';
import apiInstance from '../utils/utils';

const AdminProductsDelete = () => {

 


  
    const { setOneProducts, OneProducts} = useContext(DataProductsProvider)

    
    

    const handleDelete = async () => {
      let token = localStorage.getItem("token") || "";
      
        await apiInstance.delete(
          process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP + "/" + OneProducts._id,
          {
            headers: {
              "x-token": token,
            },
          }
        )
    }

    

  return (
    <div>
    <div className='flex'>
      <input value={OneProducts.nombre} placeholder='producto a eliminar'/>
      </div>
      <div>
         <button onClick={handleDelete}>eliminar</button>
      </div>
      </div>
  )
}

export default AdminProductsDelete