import React, { useContext } from 'react'
import { DataContext } from '../Context'
import { CartContext } from '../Context'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { data } = useContext(DataContext);
  // for (let i = 0; i < cart.length;i++) {
  //   subTotal += cart[i].price* cart[i].quantity;
  // }
  return (
    <div>Cart</div>
  )
}

export default Cart