import React, { useContext } from 'react'
import { FormContext } from '../../../contexts/FormContext'
import styles from './PaymentInformation.module.css'

export default function PaymentInformation() {

  const { input, setInput } = useContext(FormContext)

  const handleInputChange = (e) => {
   const value = e.target.value
   const key = e.value.name
   setInput({...input, [key]: value})
  }
  
  return (
    <section>
       <div className={styles.PaymentInformation__panel}>
       <h2>付款資訊</h2>
       <div className={styles.form__row}>
        <label className={styles.name}>持卡人姓名</label>
        <input id={styles.input__name} placeholder='John Doe' name="CardName" onChange={handleInputChange}></input>
        </div>
        <div className={styles.form__row}>
        <label className={styles.card__number}>卡號</label>
        <input id={styles.input__number} placeholder='1111 2222 3333 4444' name="CardNumber" onChange={handleInputChange}></input>
        </div>

        <div className={styles.form__row__three}>
        <div className={styles.date__part}>
        <label className={styles.date}>有效期限</label>
        <input id={styles.input__date} placeholder='MM/YY' name="CardExp" onChange={handleInputChange}></input>
        </div>
        <div className={styles.cvc__part}>
        <label className={styles.cvc}>CVC/ccv</label>
        <input id={styles.input__cvc} placeholder='123' name="CardCCV" onChange={handleInputChange}></input>
        </div>
        </div>

       </div>
    </section>
  )
}