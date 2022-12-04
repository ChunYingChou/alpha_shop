import './ProgressControl.css'
import { useContext } from 'react'
import { FormContext } from '../../../contexts/FormContext'
import { ReactComponent as RightArrow } from '../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow }  from '../../../icons/left-arrow.svg'
import { useCartContext } from '../../../contexts/CartContext'

export default function ProgressControl({ currentStep, handleNextClick, handlePrevClick }) {
  const { formData } = useContext(FormContext)

  const { total } = useCartContext()

  const handleSubmitClick = () => {
    console.log(formData)
    console.log(`TotalPrice: ${total()}`)
  }
  
  return (
    <div>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <div className="line"></div>
        {currentStep === 1 && (
          <section className="button-group col col-12" data-phase="address">
            <button className="btn-next" onClick={handleNextClick}>下一步<RightArrow className="svg" />
            </button>
          </section>
        )}

        {currentStep === 2 && (
          <section className="button-group col col-12" data-phase="shipping">
             <button className="btn-previous" onClick={handlePrevClick}><LeftArrow className="svg" />上一步
            </button>
            <button className="btn-next" onClick={handleNextClick}>下一步<RightArrow className="svg" />
            </button>
          </section>
        )}

        {currentStep === 3 && (
          <section className="button-group col col-12" data-phase="credit-card">
            <button className="btn-previous" onClick={handlePrevClick}><LeftArrow className="svg" />上一步
            </button>
            <button className="btn-order" onClick={handleSubmitClick}>確認下單</button>
          </section>
        )}
      </section>
    </div>
  )}
      