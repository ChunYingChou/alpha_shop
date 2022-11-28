import React from 'react'
import RegisterForm from './RegisterForm'
import ProgressControl from './ProgressControl/ProgressControl'
import StepProgress from './StepProgress/StepProgress'

const Register = ({ currentStep, handleNextClick, handlePrevClick }) => {
  return (
    <div>
      <StepProgress currentStep={currentStep}/>
      <RegisterForm currentStep={currentStep} />
      <ProgressControl
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        currentStep={currentStep}
      />
    </div>
  )
}

export default Register
