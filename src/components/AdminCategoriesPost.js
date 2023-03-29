import React from "react";
import axios from "axios";
import { useState } from "react";

const AdminCategoriesPost = () => {
  let token = localStorage.getItem("token") || "";
  if (token.length <= 10) {
    localStorage.clear("usuarioid", "usuario");
    window.location = "index.html";
    throw new Error("No hay token en el servidor");
  }

  const [postInput, setPostInput] = useState({});

  const [categories, setCategories] = useState([]);

  const [responseData, setResponseData] = useState();

  const handleUsernameCategorie = (e) => {
    setPostInput({
      ...postInput,
      nombre: e.target.value,
    });
  };

  const handlePostCategorie = async (e) => {
    try {
      let adminRol = localStorage.getItem("Usuario") || "";
      let Token = localStorage.getItem("token") || "";

      const axiosresponse = await axios.post(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP,
        postInput,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      setResponseData(axiosresponse)
    } catch (error) {
        setResponseData(error.response)
    }
  };

  return (
    <div>
      <input placeholder="Nombre categoria" onChange={(e)=>{handleUsernameCategorie(e)}} />
      <button onClick={handlePostCategorie}>Crear categoria</button>
      <p>{responseData? responseData.data.msg:""}</p>
    </div>
  );
};

export default AdminCategoriesPost;
