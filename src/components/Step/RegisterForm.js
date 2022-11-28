import DeliverAddress from "./Step1/DeliverAddress";
import ShppingMethod from "./Step2/ShppingMethod";
import PaymentInformation from "./Step3/PaymentInformation";


const RegisterForm = ({ currentStep }) => {
  return (
    <div>
      <section className="form-container col col-12">
        {currentStep === 1 && <DeliverAddress />}
        {currentStep === 2 && <ShppingMethod />}
        {currentStep === 3 && <PaymentInformation />}
      </section>
    </div>
  )
}

export default RegisterForm