import { createContext, useContext, useState } from 'react'


export const initialProducts = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]


const CartContext = createContext({
  product: []
})

export const useCartContext = () => {
  return useContext(CartContext)
}


export default function CartContext2 ({ children }) {
  const [ product, setProduct ] = useState(initialProducts);

   const total = () => {
    let totalPrice = 0
    product.forEach( item => {
      totalPrice += item.price * item.quantity
    })
    return totalPrice
   }

  // const totalPrice = function Total() {
  //   let totalPrice = null
  //   product.map(product => totalPrice += product.price * product.quantity)
  //   return totalPrice
  // }
  // const [formData, setFormData] = useState({ totalPrice: '' })

  // function handleFormChange(event) {
  //   const { name, value } = event.target
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: value,
  //     }
  //   })

  // }
  return (
    <CartContext.Provider value={{ product, setProduct, total }}>
      { children }
    </CartContext.Provider>
  )

}
