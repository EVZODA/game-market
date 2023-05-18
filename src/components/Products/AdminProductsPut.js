import React from "react";
import axios from "axios";
import apiInstance from "../utils/utils";
import { useEffect, useState, useContext } from "react";
import { DataProductsProvider } from "../Context/UseContextEdition";

const AdminProductsPut = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const [categories, setCategories] = useState([]);

  const { setOneProducts, OneProducts } = useContext(DataProductsProvider);

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
      data
    );
  };

  const handlePut = async () => {
    const urlImg = await editImg();
    OneProducts.img = urlImg.data.img;

    let token = localStorage.getItem("token") || "";
    const putt = await apiInstance.put(
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
    ).then(()=>{setOneProducts(null)
      window.location = "/"
    }).catch(
    )
  
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
    <div className="flex flex-col space-y-[7px] px-[8px] items-center justify-start h-[600px]">
      <div className="searchcontainer">
        <input
          type="text"
          className="py-2 mt-[40px] w-[350px] border-[1px] border-black rounded-[3px]"
          placeholder="Busqueda producto"
          value={OneProducts.nombre}
        />
      </div>

      <input
        type="text"
        className="py-2 w-[350px] border-[1px] border-black rounded-[3px]"
        placeholder="nombre"
        value={OneProducts.nombre}
        onChange={(e) => {
          handleUsername(e);
        }}
      />
      <input
        type="text"
        className="py-2 w-[350px] border-[1px] border-black rounded-[3px]"
        placeholder="precio"
        value={OneProducts.precio}
        onChange={(e) => {
          handlePrice(e);
        }}
      />
      <input
        type="text"
        className="py-2 w-[350px] border-[1px] border-black rounded-[3px]"
        placeholder="descripcion"
        value={OneProducts.descripcion}
        onChange={(e) => {
          handleDescription(e);
        }}
      />
      <label
        htmlFor="archivo"
        className=" border-none rounded-[7px]  py-[10px] w-[350px] flex justify-center items-center hover:bg-yellow-300 cursor-pointer bg-yellow-200"
      >
        cargar imagen
      </label>
      <input
        id="archivo"
        type="file"
        onChange={(e) => {
          handleImg(e);
        }}
        className="hidden"
        name="archivo"
        placeholder="img"
      />
      <input
        type="text"
        className="py-2 w-[350px] border-[1px] border-black rounded-[3px]"
        placeholder="disponible"
        value={OneProducts.disponible}
        onChange={(e) => {
          handleDisponible(e);
        }}
      />
      <select
        className="py-2 w-[350px] border-[1px] border-black rounded-[3px]"
        onChange={(e) => {
          handleCategories(e);
        }}
      >
        {OneProducts.categoria != null ? "" : <option selected="true" disabled></option>}
        {categories.map((categoria) => {
          return <option value={categoria._id}>{categoria.nombre}</option>;
        })}
      </select>
      <button
        onClick={handlePut}
        className="px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300"
      >
        Editar producto
      </button>
    </div>
  );
};

export default AdminProductsPut;
