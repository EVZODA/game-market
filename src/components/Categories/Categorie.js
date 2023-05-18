import React from 'react'
import { DataProductsProvider } from '../Context/UseContextEdition'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Categorie = ({categorie}) => {

  const { setOneCategories} = useContext(DataProductsProvider)
  let navigate = useNavigate()

 

  return (
    <li className='my-[40px]'>
        {categorie.nombre}
        <button className="ml-[10px] btn btn-primary mt-[15px] px-[5px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={()=>{setOneCategories(categorie); navigate("/admincategories")
}}>Configuracion</button>
    </li>
  )
}

export default Categorie