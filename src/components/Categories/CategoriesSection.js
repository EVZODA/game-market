import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import Categorie from "./Categorie";

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CATEGORIES_APP
    );
    const { data } = requestGet;
    setCategories(data.categorias);
    console.log(data.categorias);
  };

  return (
    <div className="Productsection">
      <ul className="flex flex-col items-center sm:flex-row sm:justify-center bg-slate-50 min-h-[100vh]">
        {categories.map((categorie, index) => (
          <Categorie key={index} categorie={categorie}></Categorie>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSection;