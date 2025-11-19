// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const AccountDetails = ({ stepper, type, userData, setUserData }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>اطلاعات اکانت</h5>
        <small className='text-muted'>جزییات اکانت را وارد کنید</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`userName-${type}`}>
              یوزرنیم
            </Label>
            <Input
              type='text'
              name={`userName-${type}`}
              id={`userName-${type}`}
              // placeholder='johndoe'
              value={userData.userName || ''}
              onChange={e => setUserData(prev => ({ ...prev, userName: e.target.value }))}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`gmail-${type}`}>
              جیمیل
            </Label>
            <Input
              type='email'
              name={`gmail-${type}`}
              id={`gmail-${type}`}
              // placeholder='john.doe@gmail.com'
              value={userData.gmail || ''}
              onChange={e => setUserData(prev => ({ ...prev, gmail: e.target.value }))}
            />
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`phoneNumber-${type}`}>
              شماره تلفن
            </Label>
            <Input
              type='text'
              id={`phoneNumber-${type}`}
              value={userData.phoneNumber || ''}
              onChange={e => setUserData(prev => ({ ...prev, phoneNumber: e.target.value }))}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`recoveryEmail-${type}`}>
              جیمیل ریکاوری
            </Label>
            <Input
              type='email'
              id={`recoveryEmail-${type}`}
              value={userData.recoveryEmail || ''}
              onChange={e => setUserData(prev => ({ ...prev, recoveryEmail: e.target.value }))}
            />
          </Col>
        </Row>
         <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`insertDate-${type}`}>
             تاریخ ورود
            </Label>
            <Input
              type='date'
              name={`insertDate-${type}`}
              id={`insertDate-${type}`}
              value={userData.insertDate?.split('T')[0] || ''} // برای نمایش فقط تاریخ
              onChange={e => {
                const date = e.target.value; // مثل "2025-05-24"
                const fullDate = `${date}T00:00:00`; // اضافه کردن زمان پیش‌فرض
                setUserData(prev => ({ ...prev, insertDate: fullDate }));
              }}
            />

          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`currentPictureAddress-${type}`}>
              عکس پروفایل فعلی
            </Label>
            <Input
              type='text'
              name={`currentPictureAddress-${type}`}
              id={`currentPictureAddress-${type}`}
              // placeholder='john.doe@gmail.com'
              value={userData.currentPictureAddress || ''}
              onChange={e => setUserData(prev => ({ ...prev, currentPictureAddress: e.target.value }))}
            />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0' />
            <span className='align-middle d-sm-inline-block d-none'>قبلی</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0' />
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
