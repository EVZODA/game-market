import React from 'react'
import { DataProductsProvider } from '../Context/UseContextEdition'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Categorie = ({categorie}) => {

  const { setOneCategories} = useContext(DataProductsProvider)
  let navigate = useNavigate()

 

  return (
    <li>
        {categorie.nombre}
        <button onClick={()=>{setOneCategories(categorie); navigate("/admincategories")
}}>Configuracion del producto</button>
    </li>
  )
}

export default Categorie