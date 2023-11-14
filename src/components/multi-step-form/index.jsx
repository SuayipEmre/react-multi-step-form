import React, { useState } from 'react'
import { SideBar } from '../sidebar'
import { Steps } from './constants.js'
import * as S from './styled.jsx'



export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    step1:{},
    step2:{},
    step3:{},
  })
  const [activeStep, setActiveStep] = useState('step1')
  const ActiveStep = Steps[activeStep].component


  const handleStepSubmit = (stepID, nextStepID, stepData) => {
    setFormData({
      ...formData,
      [stepID] : stepData
    })
    setActiveStep(nextStepID)
  }


const handleBack = () => {
  const currentStepNumber = Number(activeStep.slice(-1))
  setActiveStep(`step${currentStepNumber - 1}`)
}



  return (
    <div>
      <S.multiStepForm>
        <SideBar activeStep={activeStep} />
        <ActiveStep {...Steps[activeStep]} onStepSubmit={handleStepSubmit} formData={formData} onBack={handleBack}/>
      </S.multiStepForm>
    </div>
  )
}

