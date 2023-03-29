import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const url = "http://localhost:8080/api/productos/";


const AdminProductsPost = () => {
  useEffect(() => {
    getCategories();
  }, []);


  let token = localStorage.getItem("token") || "";
    if (token.length <= 10) {
      localStorage.clear("usuarioid", "usuario")
      window.location = "index.html";
      throw new Error("No hay token en el servidor");
    }

  

  const [postInput, setPostInput] = useState({});

  const [searchInput, setSearchInput] = useState("");

  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  const [responseData, setResponseData ] = useState()



  const handleUsername = (e) => {
    setPostInput({
      ...postInput,
      nombre: e.target.value,
    });
  };

  const handlePrice = (e) => {
    setPostInput({
      ...postInput,
      precio: e.target.value,
    });
  };

  const handleDescription = (e) => {
    setPostInput({
      ...postInput,
      descripcion: e.target.value,
    });
  };

  const handleImg = (e) => {
    setPostInput({
      ...postInput,
      img: e.target.value,
    });
  };

  const handleDisponible = (e) => {
    setPostInput({
      ...postInput,
      disponible: e.target.value,
    });
  };

  const handleCategories = (e) => {
    setPostInput({
      ...postInput,
      categoria: e.target.value,
    });
  };

  const handlePost = async () => {
    try {
      let adminrol = localStorage.getItem("usuario") || ""
      let token = localStorage.getItem("token") || "";
  
  
      console.log(postInput);
  
      const axioresponse = await axios.post(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP,
        postInput,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      setResponseData(axioresponse)
    } catch (error) {
      setResponseData(error.response)
    }
   
  };

  const getCategories = async () => {
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP
    );

    const { data } = requestGet;
    setCategories(data.categorias);
    console.log(data.categorias);
  };

  const getProducts = async () => {
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP
    );
    const { data } = requestGet;
    setProducts(
      data.productos.filter((product) => product.nombre.toLowerCase() === searchInput.search.toLowerCase() )
    );
    console.log(products);
    console.log(searchInput.search)
  };

  return (
    <div className="flex flex-col space-y-[7px] px-[8px] items-center justify-center h-[500px]">

      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="nombre"
        onChange={(e) => {
          handleUsername(e);
        }}
      />
      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="precio"
        onChange={(e) => {
          handlePrice(e);
        }}
      />
      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="descripcion"
        onChange={(e) => {
          handleDescription(e);
        }}
      />
      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="imagen"
        onChange={(e) => {
          handleImg(e);
        }}
      />
      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="disponible"
        onChange={(e) => {
          handleDisponible(e);
        }}
      />
      <select
        onChange={(e) => {
          handleCategories(e);
        }}
      >
        {categories.map((categoria) => {
          return <option value={categoria._id}>{categoria.nombre}</option>;
        })}
      </select>
      <button
        onClick={handlePost}
        className="border-[2px] border-[#8a5422] w-[500px]"
      >
        crear producto
      </button>
      <p>{responseData? responseData.data.msg: ""}</p>
    </div>
  );
};

export default AdminProductsPost;
