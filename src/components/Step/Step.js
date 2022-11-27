import DeliverAddress from "./Step1/DeliverAddress";
import ShppingMethod from "./Step2/ShppingMethod";
import PaymentInformation from "./Step3/PaymentInformation";


export default function Step({step}) {


  if(step === 1) {
    return <DeliverAddress />
  } else if (step === 2) {
    return <ShppingMethod />
  } else {
    return <PaymentInformation />
  }
}