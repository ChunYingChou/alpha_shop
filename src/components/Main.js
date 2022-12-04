import React, { useState, useContext } from 'react'
// import StepProgress from './Step/StepProgress/StepProgress'
// import DeliverAddress from './Step/Step1/DeliverAddress'
// import ShppingMethod from './Step/Step2/ShppingMethod'
// import PaymentInformation from './Step/Step3/PaymentInformation'
// import ProgressControl from './Step/ProgressControl/ProgressControl'
import ProductProvider from '../contexts/CartContext'
import Register from './Step/Register'
import { FormContext } from '../contexts/FormContext'

import './Main.css'
import Cart from './Cart/Cart'

export default function Main() {
  const [currentStep, setCurrentStep] = useState(1)
  const formContext = useContext(FormContext)
  const [formData, setFormData] = useState(formContext)

   const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }
  const handlePrevClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  const handleFormChange = (e) => {
    const value = e.target.value
    const key = e.target.id
    setFormData({ ...formData, [key]: value })
  }

  return (
     <div>
      <main className="site-main">
        <div className="main-container">
           <FormContext.Provider
            value={{
              formData,
              setFormData,
              handleFormChange,
            }}
          >
            <ProductProvider>
          {/* 結帳區 */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={currentStep}
            data-total-price={0}>
              <Register
                currentStep={currentStep}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
              />
          </section>
          
          {/* 購物車區*/}
          
            <div>
              <Cart />
            </div>
          </ProductProvider>
        </FormContext.Provider>
        </div>
      </main>
    </div>
  )
}
