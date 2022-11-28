// import { createContext } from 'react';

// export const CreditCardContext = {
//   totalPrice: 300,
//   CardName: '',
//   CardNumber: '',
//   CardExp: '',
//   CardCCV: '',
// }

// export const SubmitFormContext = createContext(CreditCardContext)


import { createContext } from 'react'

const FormContext = createContext({
  totalPrice: 300,
  creditName: '',
  creditNumber: '',
  creditExp: '',
  creditCVC: '',
})

export { FormContext }