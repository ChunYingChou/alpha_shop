import React from 'react'
import StepProgress from './Step/StepProgress/StepProgress'
import DeliverAddress from './Step/Step1/DeliverAddress'
import ShppingMethod from './Step/Step2/ShppingMethod'
import PaymentInformation from './Step/Step3/PaymentInformation'
import ProgressControl from './Step/ProgressControl/ProgressControl'

import './Main.css'
import Cart from './Cart/Cart'

export default function Main() {
  return (
     <div>
      <main className="site-main">
        <div className="main-container">
          {/* 結帳區 */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase="1"
            data-total-price="0">
            <StepProgress />
            <DeliverAddress />
            <ShppingMethod />
            <PaymentInformation />
            <ProgressControl />
          </section>
          {/* 購物車區*/}
            <Cart />
        </div>
      </main>
    </div>
  )
}