import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const AdminProductsDelete = () => {

  let token = localStorage.getItem("token") || "";
    if (token.length <= 10) {
      localStorage.clear("usuarioid", "usuario")
      window.location = "index.html";
      throw new Error("No hay token en el servidor");
    }


    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState("")

    const handleSearch = (e) => {
      setSearchInput({
        searchInput,
        search: e.target.value,
      });
    };
    console.log(searchInput)

    const handleDelete = async () => {
      let token = localStorage.getItem("token") || "";
      try {
        let axiosresponse = await axios.delete(
          process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP + "/" + products[0]._id,
          {
            headers: {
              "x-token": token,
            },
          }
        )
        
        console.log(axiosresponse)
      } catch (error) {
        console.log(error)
      }
    }

    const getProducts = async () => {
      const requestGet = await axios.get(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP
      );
      const {data} = requestGet
      console.log(data);
      setProducts(
        data.productos.filter(
          (product) =>
            product.nombre.toLowerCase() === searchInput.search.toLowerCase()
        )
      );
      console.log(products);
    }

  return (
    <div>
    <div className='flex'>
      <input onChange={(e)=>{handleSearch(e)}} placeholder='producto a eliminar'/>
      <button onClick={getProducts}>buscar</button>
      </div>
      <div>
         <button onClick={handleDelete}>eliminar</button>
      </div>
      </div>
  )
}

export default AdminProductsDelete