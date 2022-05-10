import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 bg-white shadow-lg">
        <div className="container">
          <a
            className="navbar-brand fw-bold fs-1 text-danger text-shadow"
            to="/"
          >
            Shnazzy Thrift Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-4 text-shadow fw-bold">
              <li className="nav-item">
                <a className="nav-link ms-5" aria-current="page" to="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" to="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" to="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" to="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a
                to="/login"
                className="btn btn-outline-danger fw-bold"
                id="box-shadow"
              >
                {" "}
                <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Log-in
              </a>
              <a
                to="/register"
                className="btn btn-outline-danger fw-bold ms-2"
                id="box-shadow"
              >
                {" "}
                <i className="fa fa-user-plus me-1" aria-hidden="true"></i>{" "}
                Register
              </a>
              <a
                to="/cart"
                className="btn btn-outline-danger fw-bold ms-2"
                id="box-shadow"
              >
                {" "}
                <i
                  className="fa fa-shopping-cart me-1"
                  aria-hidden="true"
                ></i>{" "}
                Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
