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

export default function ({ children }) {
  const [product, setProduct ] = useState(initialProducts);
  return (
    <CartContext.Provider value={{ product, setProduct }}>
      { children }
    </CartContext.Provider>
  )

}
