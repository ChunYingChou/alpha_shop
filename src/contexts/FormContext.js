import { createContext } from 'react'
// import { useState } from 'react'

const FormContext = createContext({
  totalPrice: '',
  creditName: '',
  creditNumber: '',
  creditExp: '',
  creditCVC: '',
})

export { FormContext }


// const FormData = {
//   totalPrice: '',
//   creditName: '',
//   creditNumber: '',
//   creditExp: '',
//   creditCVC: '',
// }

// export const FormContext = createContext(FormData)

// export default function FormData2({ children }) {
//   const [price, setPrice] = useState(FormData.totalPrice)
//   return (
//     <FormContext.Provider value={{price, setPrice}}>
//        { children }
//     </FormContext.Provider>
//   )
// }

