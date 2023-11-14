import React, { useState } from 'react'
import { Step } from '../step'
import FormJson from '../../../form.json'
import { DEFAULT_BILLING_TYPE, DEFAULT_PLAN, Icons, MONTHLY, YEARLY } from './constants'
import * as S from './styled'


export const { step2 } = FormJson

export const Step2 = ({ onStepSubmit, formData, ...props }) => {
  const [billingType, setBillingType] = useState(formData.step2.billingType ?? DEFAULT_BILLING_TYPE)
  const [plan, setPlan] = useState(formData.step2.plan ?? DEFAULT_PLAN)


  const changePlan = (newPlan) => {
    setPlan(newPlan)
  }
  const changeBillingType = (newBillingType) => {
    setBillingType(newBillingType)
  }
  const onSubmit = () => {
    onStepSubmit('step2', 'step3', {
      billingType,
      plan
    })
  }


  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step2>
        <S.RadioGroup>
          {
            step2[DEFAULT_BILLING_TYPE].map(item => (
              <S.RadioLabel key={item.id} isSelected={item.id === plan.id}>
                <S.RadioInput
                  type='radio'
                  name='plan-type'
                  onChange={() => changePlan(item)}
                />
                <S.Icon src={Icons[item.id]} />
                <S.Title>{item.title}</S.Title>
                <S.SubTitle>{item.price}</S.SubTitle>
                {billingType === YEARLY && <S.Description>{item.description}</S.Description>}
              </S.RadioLabel>
            ))

          }
        </S.RadioGroup>
        <S.BillingGroup>
          <S.BillingButton type='button' onClick={() => changeBillingType(MONTHLY)} isSelected={billingType === MONTHLY} >Monthly</S.BillingButton>
          <S.BillingButton type='button' onClick={() => changeBillingType(YEARLY)} isSelected={billingType === YEARLY} >Yearly</S.BillingButton>
        </S.BillingGroup>
      </S.Step2>

    </Step>
  )
}
