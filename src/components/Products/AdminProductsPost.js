import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import apiInstance from "../utils/utils";


const AdminProductsPost = () => {
  useEffect(() => {
    getCategories();
  }, []);




  const [postInput, setPostInput] = useState({});

  const [categories, setCategories] = useState([]);

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
      img: e.target.files[0],
    })
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


  const SubirArchivo = async () => {
    let productos= "productos";

    const data = new FormData();
    data.append("archivo", postInput.img);
    return await apiInstance.post(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_EDITAR_IMAGEN_APP +
        "/" +
        productos,
      data
    )};


  const handlePost = async () => {

   const urlCloudinary = await SubirArchivo()
   postInput.img = urlCloudinary.data.img
    
      let token = localStorage.getItem("token") || "";
  
  
      console.log(postInput);
  
     await apiInstance.post(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP,
        postInput,
        {
          headers: {
            "x-token": token,
          },
        }
      );
   
  };

  const getCategories = async () => {
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP
    );

    const { data } = requestGet;
    setCategories(data.categorias);
    console.log(data.categorias);
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
          type="file"
          onChange={(e) => {
            handleImg(e);
          }}
          className="border-[2px] border-[#8a5422] w-[350px]"
          name="archivo"
          placeholder="img"
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
    </div>
  );
};

export default AdminProductsPost;
