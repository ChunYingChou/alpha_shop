import React from 'react'
import { useContext } from 'react'
import CartItem from './CartItem'
import './Cart.css'
import { CartContext } from '../../contexts/CartContext'


export default function Cart() {
  const {data, setData} = useContext(CartContext)

  let totalPrice = 0
  data.forEach(data => {
    totalPrice += data.price * data.quantity
  })

  
  return (
    <div className="col col-lg-5 col-sm-12">
       {/* cart  */}
       <section className="cart-container">
         <h3 className="cart-title">購物籃</h3>

         <section className="product-list">
           <CartItem data={data} setData={setData} />
         </section>

         <section className="cart-info shipping col col-12">
         <div className="text">運費</div>
         <div className="price">$100</div>
       </section>

      <section className="cart-info total col col-12">
         <div className="text">小計</div>
         <div className="price">${totalPrice}</div>
       </section>

       </section>
     </div>
   
 )
}




