import React from 'react'
import styles from './ShppingMethod.module.css'
import { useState } from 'react'

export default function ShppingMethod() {

  const [ shippingChange, setShippingChange] = useState('on')
  const handleChange = (event) => {
    setShippingChange(event.target.value)
  } 

  return (
    <section>
    <div className={styles.ShppingMethod__panel}>
      <h2>運送方式</h2>
      <div className={styles.choose__part}>

        <div className={styles.common__deliver}>
          <div className={styles.left__part}>
          {/* <div className={styles.circle__container__choose}></div> */}
          <input id="shipping-standard" type="radio" name="shipping" value="on" checked={shippingChange === 'on'} onChange={handleChange} />
          <div className={styles.text}>
          <label>標準運送</label>
          <label>約3~7個工作天</label>
          </div>
          </div>
          <label className={styles.right__text}>免費</label>
        </div>

        <div className={styles.dhl__deliver}>
          <div className={styles.left__part}>
          {/* <div className={styles.circle__container}></div> */}
          <input id="shipping-dhl" type="radio" name="shipping" value="off" checked={shippingChange === 'off'} onChange={handleChange} />
          <div className={styles.text}>
          <label className={styles.text__dhl}>DHL貨運</label>
          <label>48小時內送達</label>
          </div>
          </div>
          <label className={styles.right__text}>$500</label>
        </div>

      </div>

    </div>
    </section>
  )
}