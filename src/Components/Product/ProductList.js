import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const list = useSelector((state) => state.listProd);
  // console.log(list)
  const value = useSelector((state) => state.value);
  const category=useSelector((state)=>state.category);
  return (
    <div>
      <Link to="/add">Add Product</Link>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {category=='all'
          ? list
              .filter((el) =>
                el.title.toLowerCase().includes(value.toLowerCase())
              )
              .map((el) => <ProductCard el={el} key={el.id} />)
          :list.filter((el) =>
          el.title.toLowerCase().includes(value.toLowerCase()
          
          )
          && el.category==category
        ).map((el) => <ProductCard el={el} key={el.id} />)}
      </div>
    </div>
  );
};

export default ProductList;
