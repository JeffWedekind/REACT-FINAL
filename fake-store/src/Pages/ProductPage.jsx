import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Cart from "./Cart";
import { CartContext } from "../Context/CartContext";

const ProductPage = () => {
  const { data } = useContext(DataContext);
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      {data.map((value, index) => (
        <div class="container-fluid">
          <div class="col">
            <div class="row text-center">
              <div key={index}>
                <div class="display-5 fst-bold text-dark fst-italic">
                  {value.category}
                </div>
                <div class="display-7 text-dark fst-italic">{value.title}</div>
                <br></br>
                <img src={value.image} alt="Product-Pictures" class="w-25" />
                <br></br>
                <div class="display-7 text-dark fst-italic">
                  {value.description}
                </div>
                <div class="display-7 text-dark">{value.price}</div>
                <button className="CartButton" onClick={() => setCart([...cart,value])}>BUY NOW</button>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
