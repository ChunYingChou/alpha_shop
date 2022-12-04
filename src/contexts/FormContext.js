import { createContext } from 'react'
// import { useState } from 'react'

const FormContext = createContext({
  creditName: '',
  creditNumber: '',
  creditExp: '',
  creditCVC: '',
})

export { FormContext }