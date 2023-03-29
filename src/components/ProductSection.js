import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const requestGet = await axios.get(
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_PRODUCTS_APP
    );
    const { data } = requestGet;
    setProducts(data.productos);
    console.log(data.productos);
  };

  return (
    <div className="Productsection container">
      <ul>
        {products.map((product, index) => (
          <Product key={index} product={product}></Product>
        ))}
      </ul>
    </div>
  );
};

export default ProductSection;
