import React from "react";
import ProductData from "../db/ProductData";

const Products = () => {
  return (
    <div className="products  h-screen flex pt-10">
      <ProductData />
    </div>
  );
};

export default Products;
