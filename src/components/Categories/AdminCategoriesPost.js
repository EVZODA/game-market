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
    <div className="flex flex-col space-y-[7px] px-[8px] items-center justify-start h-[600px]">
      <input className="py-2 mt-[40px] w-[350px] border-[1px] border-black rounded-[3px]" placeholder="Nombre categoria" onChange={(e)=>{handleUsernameCategorie(e)}} />
      <button className="px-[40px] mt-[20px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300" onClick={handlePostCategorie}>Crear categoria</button>
    </div>
  );
};

export default AdminCategoriesPost;
