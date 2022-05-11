import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav class="container-fluid">
        <div class="row text-center bg-dark bg-opacity-75 p-3">
          <a class="display-6 fst-bold text-light" href="">
            <strong>Shnazzy Thrift Store</strong>
          </a>
          <div>
            <Link class="text-white" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link class="text-white" to="/product-page">
              Products
            </Link>
          </div>
          <div>
            <Link class="text-white" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
