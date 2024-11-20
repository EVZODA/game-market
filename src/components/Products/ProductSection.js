import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import apiInstance from "../utils/utils";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products)

  const getProducts = async () => {
    const requestGet = await apiInstance.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP
    );
    const { data } = requestGet;
    setProducts(data.productos);
  };

  return (
    <div className="Productsection bg-slate-200 py-[70px]">
      <ul className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
            <Product key={index} product={product}></Product>
        ))}
      </ul>
    </div>
  );
};

export default ProductSection;
