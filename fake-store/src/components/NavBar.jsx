import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product-page">Products</Link>
      </div>
    </>
  );
}
