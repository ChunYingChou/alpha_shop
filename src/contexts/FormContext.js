import { createContext } from 'react'

const FormContext = createContext({
  totalPrice: '',
  creditName: '',
  creditNumber: '',
  creditExp: '',
  creditCVC: '',
})

export { FormContext }