import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav class="container-fluid">
        <div class="row text-center p-3 HeroFont text-dark">
          <div class="display-6 fst-bold text-dark" href="">
            Shnazzy Thrift Store
          </div>
          <div>
            <Link class="text-dark" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link class="text-dark" to="/product-page">
              Products
            </Link>
          </div>
          <div>
            <Link class="text-dark" to="/cart">
              Cart
            </Link>
          </div>
          <div>
            <Link class="text-dark" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
