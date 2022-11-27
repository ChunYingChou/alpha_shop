import { createContext } from 'react';

const initialData = {
  totalPrice: 300,
  CardName: '',
  CardNumber: '',
  CardExp: '',
  CardCCV: '',
}

export const FormContext = createContext(initialData)