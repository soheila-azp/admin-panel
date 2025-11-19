import { useRef, useState } from 'react'
import { Button } from 'reactstrap'
import Wizard from '@components/wizard'

// ** Steps
import Address from './steps/Address'
import SocialLinks from './steps/SocialLinks'
import PersonalInfo from './steps/PersonalInfo'
import AccountDetails from './steps/AccountDetails'
import StatusRoles from './steps/StatusRoles'

// ** API
import { updateUser } from '../../../../Services/Api/Panel'

const UpdateUser = ({ closeModal, userId }) => {
  const ref = useRef(null)
    const [stepper, setStepper] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [userData, setUserData] = useState({
    id: userId,
    fName: '',
    lName: '',
    userName: '',
    gmail: '',
    phoneNumber: '',
    active: true,
    isDelete: false,
    isTecher: false,
    isStudent: true,
    recoveryEmail: '',
    twoStepAuth: false,
    userAbout: '',
    currentPictureAddress: '',
    linkdinProfile: '',
    telegramLink: '',
    receiveMessageEvent: true,
    homeAdderess: '',
    nationalCode: '',
    gender: true,
    latitude: '',
    longitude: '',
    insertDate: new Date().toISOString().split('T')[0], // For <input type="date" />
    birthDay: '',
    roles: [],
    courses: [],
    coursesReseves: [],
    userProfileId: userId
  })

  // Send full insertDate with time
  const getFormattedData = () => ({
    ...userData,
    insertDate: `${userData.insertDate}T00:00:00`
  })

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const finalData = getFormattedData()
      await updateUser(finalData)
      alert('اطلاعات با موفقیت ذخیره شد!')
      closeModal()
    } catch (error) {
      console.error('خطا در ذخیره اطلاعات:', error)
      alert('خطا در ذخیره اطلاعات.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const steps = [
    {
      id: 'account-details',
      title: 'اطلاعات اکانت',
      subtitle: 'جزییات اکانت را وارد کنید',
      content: (
        <AccountDetails
          userData={userData}
          setUserData={setUserData}
          stepper={stepper}
          type='wizard-vertical'
        />
      )
    },
    {
      id: 'status-roles',
      title: 'وضعیت و ویژگی‌ها',
      subtitle: 'وضعیت و ویژگی‌ها را تغییر دهید',
      content: (
        <StatusRoles
          userData={userData}
          setUserData={setUserData}
          stepper={stepper}
          type='wizard-vertical'
        />
      )
    },
    {
      id: 'personal-info',
      title: 'اطلاعات شخصی',
      subtitle: 'اطلاعات شخصی را وارد کنید',
      content: (
        <PersonalInfo
          userData={userData}
          setUserData={setUserData}
          stepper={stepper}
          type='wizard-vertical'
        />
      )
    },
    {
      id: 'step-address',
      title: 'آدرس',
      subtitle: 'آدرس را اضافه کنید',
      content: (
        <Address
          userData={userData}
          setUserData={setUserData}
          stepper={stepper}
          type='wizard-vertical'
        />
      )
    },
    {
      id: 'social-links',
      title: 'شبکه‌های اجتماعی',
      subtitle: 'لینک شبکه‌های اجتماعی را اضافه کنید',
      content: (
        <SocialLinks
          userData={userData}
          setUserData={setUserData}
          stepper={ref.current}
          type='wizard-vertical'
        />
      )
    }
  ]
console.log('userData:', userData)

  return (
    <div className='vertical-wizard' style={{ width: '760px' }}>
      <Wizard
        type='vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
      {/* دکمه ثبت نهایی در پایین فرم */}
      <div className='d-flex justify-content-end mt-2'>
        <Button
          color='primary'
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'در حال ذخیره...' : 'ذخیره نهایی'}
        </Button>
      </div>
    </div>
  )
}

export default UpdateUser


