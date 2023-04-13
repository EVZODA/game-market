
import { useState, createContext } from 'react'
import axios from 'axios'






export const DataItemsInCart = createContext()

const UserContextCart = (props) => {

    let token = localStorage.getItem("token")

    const [productsInCart, setProductsInCart] = useState({})

    const getProductsInCart = async () => {
        const requestGet = await axios.get(
         process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_OBTENER_CARRITO,
         {
            headers: {
              "x-token": token,
            },
          } 
        )
        console.log(requestGet)
        const {data} = requestGet
        setProductsInCart(data.usuarioIncart)
        return data.usuarioIncart
      }


  return (
    <DataItemsInCart.Provider value={{productsInCart, setProductsInCart, getProductsInCart}}>
        {props.children}
    </DataItemsInCart.Provider>
  )
}

export default UserContextCart