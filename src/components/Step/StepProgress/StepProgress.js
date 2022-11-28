import React from 'react'
import styles from './StepProgress.module.css'
import { ReactComponent as CompleteIcon } from '../../../icons/pg-complete.svg'

export default function StepProgress({currentStep}) {
   return (
  <section>
    
    <div className={styles.stepper__panel}>
      <h2 className={styles.title1}>結帳</h2>
      <div className={styles.stepper__container}>

        <div className={styles.step}>
          <div className={styles.circle__container} style={{display: currentStep > 1 && 'none'}}>1</div>
          <CompleteIcon className="icon cursor-point" style={{display: currentStep === 1 && 'none'}}/>
          <span className={styles.label__container}>寄送地址</span>
          <span className={styles.connect__line}></span>
        </div>

        <div className={styles.step}>
          <div className={styles.circle__container} style={{display: currentStep > 2 && 'none'}}>2</div>
          <CompleteIcon className="icon cursor-point" style={{display: currentStep <= 2 && 'none'}}/>
          <span className={styles.label__container}>運送方式</span>
          <span className={styles.connect__line}></span>
        </div>
        
        <div className={styles.step}>
          <div className={styles.circle__container}>3</div>
          <span className={styles.label__container}>付款資訊</span>
        </div>

      </div>
    </div>
  </section>
 )
}