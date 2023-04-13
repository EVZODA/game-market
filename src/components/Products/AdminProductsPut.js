import React from "react";
import axios from "axios";
import apiInstance from "../utils/utils";
import { useEffect, useState, useContext } from "react";
import { DataProductsProvider } from "../Context/UseContextEdition";


const AdminProductsPut = () => {
  useEffect(() => {
    getCategories();
  }, []);

  let usuarioid = localStorage.getItem("usuarioid") || "";

  let token = localStorage.getItem("token") || "";


  const [categories, setCategories] = useState([]);

  const { setOneProducts, OneProducts} = useContext(DataProductsProvider)


  const handleUsername = (e) => {
    setOneProducts({
      ...OneProducts,
      nombre: e.target.value,
    });
  };

  const handlePrice = (e) => {
    setOneProducts({
      ...OneProducts,
      precio: e.target.value,
    });
  };

  const handleDescription = (e) => {
    setOneProducts({
      ...OneProducts,
      descripcion: e.target.value,
    });
  };

  const handleImg = (e) => {
    setOneProducts({
      ...OneProducts,
      img: e.target.files[0],
    });
  };

  const handleDisponible = (e) => {
    setOneProducts({
      ...OneProducts,
      disponible: e.target.value,
    });
  };

  const handleCategories = (e) => {
    setOneProducts({
      ...OneProducts,
      categoria: e.target.value,
    });
  };

  const editImg = async () => {
    let producto = "productos";

    const data = new FormData();
    data.append("archivo", OneProducts.img);
    return await apiInstance.put(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_EDITAR_IMAGEN_APP +
        "/" +
        producto +
        "/" +
        OneProducts._id,
      data)
  }


  const handlePut = async () => {
    const urlImg = await editImg()
    OneProducts.img = urlImg.data.img

    let token = localStorage.getItem("token") || "";
    const putiano = await apiInstance.put(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_PRODUCTS_APP +
          "/" +
          OneProducts._id,
        OneProducts,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      console.log(putiano)
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
      <div className="searchcontainer">
        <input
          className="border-[2px] border-[#8a5422] w-[400px] mr-[20px]"
          placeholder="Busqueda producto"
          value={OneProducts.nombre}
        />
      </div>

      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="nombre"
        value={OneProducts.nombre}
        onChange={(e) => {
          handleUsername(e);
        }}
      />
      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="precio"
        value={OneProducts.precio}
        onChange={(e) => {
          handlePrice(e);
        }}
      />
      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="descripcion"
        value={OneProducts.descripcion}
        onChange={(e) => {
          handleDescription(e);
        }}
      />
       <input
          type="file"
          onChange={(e) => {
            handleImg(e);
          }}
          className="border-[2px] border-[#8a5422] w-[500px]"
          name="archivo"
          placeholder="img"
        />
      <input
        className="border-[2px] border-[#8a5422] w-[500px]"
        placeholder="disponible"
        value={OneProducts.disponible}
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
        onClick={handlePut}
        className="border-[2px] border-[#8a5422] w-[500px]"
      >
        Editar producto
      </button>
    </div>
  );
};

export default AdminProductsPut;
