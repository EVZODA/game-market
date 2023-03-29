import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const url = "http://localhost:8080/api/productos/:id";

const AdminProductsPut = () => {
  useEffect(() => {
    getCategories();
  }, []);

  
    let token = localStorage.getItem("token") || "";
    if (token.length <= 10) {
      localStorage.clear("usuarioid", "usuario")
      window.location = "index.html";
      throw new Error("No hay token en el servidor");
    }

  const [putinput, setPutInput] = useState({});

  const [axiosdata, setAxiosData] = useState();

  const [searchInput, setSearchInput] = useState("");

  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchInput({
      search: e.target.value,
    });
  };

  const handleUsername = (e) => {
    setPutInput({
      ...putinput,
      nombre: e.target.value,
    });
  };

  const handlePrice = (e) => {
    setPutInput({
      ...putinput,
      precio: e.target.value,
    });
  };

  const handleDescription = (e) => {
    setPutInput({
      ...putinput,
      descripcion: e.target.value,
    });
  };

  const handleImg = (e) => {
    setPutInput({
      ...putinput,
      img: e.target.value,
    });
  };

  const handleDisponible = (e) => {
    setPutInput({
      ...putinput,
      disponible: e.target.value,
    });
  };

  const handleCategories = (e) => {
    setPutInput({
      ...putinput,
      categoria: e.target.value,
    });
  };

  const handlePut = async () => {
    let token = localStorage.getItem("token") || "";

    console.log(putinput);

    try {
      let axiosresponse = await axios.put(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_PRODUCTS_APP +
          "/" +
          products[0]._id,
        putinput,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      setAxiosData(axiosresponse);
    } catch (error) {
      setAxiosData(error.response);
    }

    console.log(axiosdata);
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
    console.log(data);
    setProducts(
      data.productos.filter(
        (product) =>
          product.nombre.toLowerCase() === searchInput.search.toLowerCase()
      )
    );
    console.log(products);
  };

  return (
    <div className="flex flex-col space-y-[7px] px-[8px] items-center justify-center h-[500px]">
      <div className="searchcontainer">
        <input
          className="border-[2px] border-[#8a5422] w-[400px] mr-[20px]"
          placeholder="Busqueda producto"
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <button
          onClick={getProducts}
          className="border-[2px] border-[#8a5422] w-[80px]"
        >
          hola
        </button>
      </div>

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
        onClick={handlePut}
        className="border-[2px] border-[#8a5422] w-[500px]"
      >
        Editar producto
      </button>
      <p>{axiosdata ? axiosdata.data.msg : ""}</p>
    </div>
  );
};

export default AdminProductsPut;
