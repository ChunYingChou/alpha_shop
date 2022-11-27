import React from 'react'
import './Cart.css'
import { ReactComponent as Minus } from '../../icons/minus.svg'
import { ReactComponent as Plus } from '../../icons/plus.svg'



export default function CartItem ({ data, setData }) {

  // 數量減少的按鍵
  function handleMinus(dataID) {
    let ItemData = data.map((data) => {
        if(data.id === dataID) {
          return {
            ...data,
            quantity: (data.quantity) - 1
          }
        } else {
          return data
        }
      })
      
      ItemData = ItemData.filter((item) => item.quantity > 0)
      setData(ItemData)
  }

  // 數量增加的按鍵
  function handlePlus(dataID) {
    setData(
      data.map((data) => {
        if(data.id === dataID) {
          return {
            ...data,
            quantity: (data.quantity) + 1
          }
        } else {
          return data
        }
      })
    )
  }

const products = data.map((product) => 
  <div className="product-container col col-12" key={product.id}>
       <img className="img-container" src={product.img} alt="" />
       <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-control-container">
           <div className="product-control">             
           <Minus className="product-minus" onClick={() => handleMinus(product.id)} />
             {/* <div className="circle__container" onClick={() => {handleMinus(id)}}>－</div> */}
             <span className="product-count">{product.quantity}</span>
            <Plus className="product-plus" onClick={() => handlePlus(product.id)} />
             {/* <div className="circle__container" onClick={() => {handlePlus(id)}}>＋</div> */}
           </div>
         </div>
         <div className="price">${product.price}</div>
       </div>
     </div>

)
return (
  <>{products}</>
)

}


// export default function CartItem({id, name, img, price, quantity, handlePlus, handleMinus}) {
// return(
//        <div className="product-container col col-12" data-count={quantity} data-price={price}>
//        <img className="img-container" src={img} alt="" />
//        <div className="product-info">
//         <div className="product-name">{name}</div>
//         <div className="product-control-container">
//            <div className="product-control">             
//            <Minus className="product-minus" onClick={() => {handleMinus(id)}} />
//              {/* <div className="circle__container" onClick={() => {handleMinus(id)}}>－</div> */}
//              <span className="product-count">{quantity}</span>
//             <Plus className="product-plus" onClick={() => {handlePlus(id)}} />
//              {/* <div className="circle__container" onClick={() => {handlePlus(id)}}>＋</div> */}
//            </div>
//          </div>
//          <div className="price">${price * quantity}</div>
//        </div>
//      </div>
// )
// }

