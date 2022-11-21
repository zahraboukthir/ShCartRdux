import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const list = useSelector((state) => state.listProd);
  // console.log(list)
  return (
    <div>
      <Button>Add Product</Button>
      <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {list.map((el) => (
        <ProductCard el={el} key={el.id} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
