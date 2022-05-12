import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src="/Assets/empty-store-shelves.jpg"
          alt="Background"
          height="800px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 HeroFont1 fw-bolder mb-0">
              NEW ARRIVALS
            </h5>
            <p className="card-text display-4 fw-bolder HeroFont1 lead fs-2">
              CHECK OUT ALL OF THE TRENDS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
