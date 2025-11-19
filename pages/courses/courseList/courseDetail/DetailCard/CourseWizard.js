import React from 'react'

// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Descreption from './steps/Descreption'
import Commemts from './steps/Comments'
import Reserves from './steps/Reserves'
// ** Icons Imports
import { FileText, User, MapPin, Link } from 'react-feather'

const CourseWizard = ({courseDetails}) => {
  // ** Ref
  const ref = useRef(null)
 console.log('CourseWizard',courseDetails) 
  // ** State
  const [stepper, setStepper] = useState(null)
if (!courseDetails) return <p>داده هنوز آماده نیست...</p>
  const steps = [
    {
      id: 'account-details',
      title: 'توضیحات دوره',
    //   subtitle: 'Enter Your Account Details.',
      icon: <FileText size={18} />,
      content: <Descreption stepper={stepper} type='wizard-modern' courseDetails={courseDetails}/>
    },
    {
      id: 'personal-info',
      title: 'رزروها',
    //   subtitle: 'Add Personal Info',
      icon: <User size={18} />,
      content: <Reserves stepper={stepper} type='wizard-modern' courseDetails={courseDetails}/>
    },
    {
      id: 'step-address',
      title: 'کامنت ها',
    //   subtitle: 'Add Address',
      icon: <MapPin size={18} />,
      content: <Commemts stepper={stepper} type='wizard-modern' courseDetails={courseDetails}/>
    }
  ]

  return (
    <div className='modern-horizontal-wizard ' >
      <Wizard
        className='w-full max-w-[900px] mx-auto'
        type='modern-horizontal'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}



export default CourseWizard
