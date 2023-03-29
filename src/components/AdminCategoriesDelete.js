import React from "react";
import axios from "axios";
import { useState } from "react";

const AdminCategoriesDelete = () => {
  let token = localStorage.getItem("token") || "";
  if (token.length <= 10) {
    localStorage.clear("usuarioid", "usuario", "token");
    window.location = "index.html";
    throw new Error("No hay token en el servidor");
  }

  const [searchInput, setSearchInput] = useState("");
  const [categories, setCategories] = useState("");
  const [axiosData, setAxiosData] = useState();

  const handleSearch = (e) => {
    setSearchInput({
      searchInput,
      search: e.target.value,
    });
  };

  const handleDelete = async () => {
    let token = localStorage.getItem("token") || "";
    try {
      let axiosresponse = await axios.delete(
        process.env.REACT_APP_LOCAL_HOST +
          process.env.REACT_APP_CATEGORIES_APP +
          "/" +
          categories[0]._id,
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
  };

  const getCategories = async () =>{
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP
    );
    const {data} = requestGet
    setCategories(
      data.categorias.filter(
        (categorie) =>
        categorie.nombre.toLowerCase() === searchInput.search.toLowerCase()
      )
    )
  }

  return (
    <div>
      <div className="flex">
        <input
          onChange={(e) => {
            handleSearch(e);
          }}
          placeholder="Categoria a eliminar"
        />
        <button onClick={getCategories}>buscar</button>
      </div>
      <div>
        <button onClick={handleDelete}>eliminar</button>
      </div>
      <p>{axiosData?axiosData.data.msg : ""}</p>
    </div>
  );
};

export default AdminCategoriesDelete;
