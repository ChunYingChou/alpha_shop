import React from 'react'
import './ProgressControl.css'
import { useContext } from 'react'
import { FormContext } from '../../../contexts/FormContext'

export default function ProgressControl({step, setStep}) {
  const {creditCardData} = useContext(FormContext)

  function handleClickNext(e) {
    e.stopPropagation()
    setStep(step + 1)
  }

  function handleClickPrevious(e) {
    e.stopPropagation()
    setStep(step - 1)
  }

  function handleClickConfirm(e) {
    e.stopPropagation()
    console.log(`name:${creditCardData.creditCardName},\n cardNumber:${creditCardData.creditCardNumber},\n exp:${creditCardData.creditCardExp},\n CVC:${creditCardData.creditCardCCV},\n TotalPrice:${creditCardData.totalPrice}`)
  }


  
  return (
    <section>
      <div id="btn-control" className="control-panel">
        <div className="line"></div>
        <div className="button-area">
       <button className="btn-previous">←　上一步</button>
       <button className="btn-next">下一步　→</button>
       <button className="btn-order">確認下單</button>
       </div>
      </div>
    </section>
  )
}