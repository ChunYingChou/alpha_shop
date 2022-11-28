import React from 'react'
import CartItem from './CartItem'
import './Cart.css'
import { useCartContext } from '../../contexts/CartContext'


export default function Cart() {
  const { product, setProduct } = useCartContext()

  let totalPrice = 0
  product.forEach(data => {
    totalPrice += data.price * data.quantity
  })

  
  return (
    <div className="col col-lg-5 col-sm-12">
       {/* cart  */}
       <section className="cart-container">
         <h3 className="cart-title">購物籃</h3>

         <section className="product-list">
           <CartItem data={product} setData={setProduct} />
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




