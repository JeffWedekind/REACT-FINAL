import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const ProductPage = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      {data.map((value, index) => (
        <div key={index}>
          <div>{value.category}</div>
          <div>{value.title}</div>
          <img src={value.image} alt="" />
          <div>{value.description}</div>
          <div>{value.price}</div>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
