import React from "react";
import { useState } from "react";
import apiInstance from "../utils/utils";

const AdminCategoriesPost = () => {

  const [postInput, setPostInput] = useState({});


  const handleUsernameCategorie = (e) => {
    setPostInput({
      ...postInput,
      nombre: e.target.value,
    });
  };

  const handlePostCategorie = async (e) => {
    let token = localStorage.getItem("token") || "";
 

      await apiInstance.post(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP,
        postInput,
        {
          headers: {
            "x-token": token,
          },
        }
      );
  };

  return (
    <div>
      <input placeholder="Nombre categoria" onChange={(e)=>{handleUsernameCategorie(e)}} />
      <button onClick={handlePostCategorie}>Crear categoria</button>
    </div>
  );
};

export default AdminCategoriesPost;
