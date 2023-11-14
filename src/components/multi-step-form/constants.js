import { Step1 } from '../step-1'
import { Step2 } from '../step-2'
import { Step3 } from '../step-3'
import { Step4 } from '../step-4'

export const Steps = {
    step1 : {
      component : Step1,
      title  : 'Personal Info',
      subtitle:'Please provide your name, email address, and phone number',
      hasNextButton :true,
      hasBackButton :false
    },
  
    step2 : {
      component : Step2,
      title  : 'Select Your Plan',
      subtitle:'You have the option of monthly or yearly billing',
      hasNextButton :true,
      hasBackButton :true
    },
  
    step3 : {
      component : Step3,
      title  : 'Pick add-ons',
      subtitle:'Add-ons help enhance your gamimng experience',
      hasNextButton :true,
      hasBackButton :true
    },
  
    step4: {
      component : Step4,
      title  : 'Finishing Up',
      subtitle:'Double-check everythink looks OK before confirming',
      hasNextButton :false,
      hasBackButton :true
    }
  
  }
  