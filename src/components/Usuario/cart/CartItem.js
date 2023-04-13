import axios from "axios"
import { useEffect, useState } from "react"



const CartItem = ({productincart}) => {
  const [item , setItem] = useState({})
  const dataProduct = async () => {
    const requestGet = await axios.get(
     process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP + "/" + productincart._id
    )
    console.log(requestGet)
    const {data} = requestGet
    setItem({
      nombre: data.nombre,
      precio: data.precio,
      img: data.img,
      descripcion: data.descripcion
    })
    return data
  }

  useEffect(() => {
  dataProduct()
  }, [])
  

  return (
    <div>
        <li>
            {item.nombre} {item.precio} {item.descripcion} {productincart.quantity} <img alt="" src={item.img}/>
        </li>
    </div>
  )
}

export default CartItem