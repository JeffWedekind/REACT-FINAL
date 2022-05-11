import React from 'react'
// Created a Footer component with bootstrap styling that includes a copyright message and social media links
export default function Footer() {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-12 col-md d-flex justify-content-center">
              <a className="text-white display-5 m-3 p-1" href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a className="text-white display-6 m-3 p-1" href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a className="text-white display-6 m-3 p-1" href="#">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a className="text-white display-6 m-3 p-1" href="#">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
            <span className="text-white fw-bold display-6 m-3 p-1">
              &copy;Shnazzy Thrift Shop JW 2022
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
