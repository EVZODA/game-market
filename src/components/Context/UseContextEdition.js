import React from 'react'
import {useState, createContext} from 'react'


export const DataProductsProvider = createContext()

const UseContextEdition = (props) => {
    const [OneProducts, setOneProducts] = useState(null)
    const [OneCategories, setOneCategories] = useState(null)
    const [products, setProducts] = useState([]);

    

  return (
    <DataProductsProvider.Provider value={{OneProducts, setOneProducts, setOneCategories, OneCategories, products, setProducts}}>
        {props.children}
    </DataProductsProvider.Provider>
  )
}

export default UseContextEdition