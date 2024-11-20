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
    });
  };

  console.log(postInput.img)

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
    let productos = "productos";

    const data = new FormData();
    data.append("archivo", postInput.img);
    return await apiInstance.post(
      process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_EDITAR_IMAGEN_APP +
        "/" +
        productos,
      data
    );
  };

  const handlePost = async () => {
    const urlCloudinary = await SubirArchivo();
    postInput.img = urlCloudinary.data.img;

    let token = localStorage.getItem("token") || "";

    await apiInstance
      .post(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP,
        postInput,
        {
          headers: {
            "x-token": token,
          },
        }
      )
      .then(() => {
        setPostInput(null);
        window.location = "/";
      })
      .catch();
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
      <input
        className="py-2 mt-[40px] w-[350px] border-[1px] border-black rounded-[3px]"
        placeholder="nombre"
        onChange={(e) => {
          handleUsername(e);
        }}
      />
      <input
        className="py-2 w-[350px] border-[1px] border-black rounded-[3px]"
        placeholder="precio"
        onChange={(e) => {
          handlePrice(e);
        }}
      />
      <input
        className="py-2 w-[350px] border-[1px] border-black rounded-[3px]"
        placeholder="descripcion"
        onChange={(e) => {
          handleDescription(e);
        }}
      />
      <label
        htmlFor="archivo"
        className="border-none rounded-[7px]  py-[10px] w-[350px] flex justify-center items-center hover:bg-yellow-300 cursor-pointer bg-yellow-200"
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
        className="py-2 w-[350px] border-[1px] border-black rounded-[3px]"
        placeholder="disponible"
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
        {postInput.categoria != null ? (
          ""
        ) : (
          <option selected="true" disabled></option>
        )}
        {categories.map((categoria) => {
          return <option value={categoria._id}>{categoria.nombre}</option>;
        })}
      </select>
      <button
        onClick={handlePost}
        className="px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300"
      >
        crear producto
      </button>
    </div>
  );
};

export default AdminProductsPost;
