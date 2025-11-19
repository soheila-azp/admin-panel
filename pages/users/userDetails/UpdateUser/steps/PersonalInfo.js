// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const PersonalInfo = ({ stepper, type, userData, setUserData  }) => {
  
 const genderOptions = [
  { value: true, label: 'خانم' },
  { value: false, label: 'آقا' }
];

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>اطلاعات شخصی</h5>
        <small>اطلاعات شخصی را وارد کنید</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`fName-${type}`}>
              نام
            </Label>
            <Input type='text' name='fName' id={`fName-${type}`}  
             value={userData.fName || ''}
              onChange={e => setUserData(prev => ({ ...prev, fName: e.target.value }))}/>
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`lName-${type}`}>
              نام خانوادگی
            </Label>
            <Input type='text' name='lName' id={`lName-${type}`}  
             value={userData.lName || ''}
              onChange={e => setUserData(prev => ({ ...prev, lName: e.target.value }))}/>
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`birthDay-${type}`}>
              تاریخ تولد
            </Label>
              <Input
              type='date'
              name={`birthDay-${type}`}
              id={`birthDay-${type}`}
              value={userData.birthDay?.split('T')[0] || ''} // برای نمایش فقط تاریخ
              onChange={e => {
                const date = e.target.value; // مثل "2025-05-24"
                const fullDate = `${date}T00:00:00`; // اضافه کردن زمان پیش‌فرض
                setUserData(prev => ({ ...prev, birthDay: fullDate }));
              }}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`nationalCode-${type}`}>
              کد ملی
            </Label>
             <Input type='text' name='nationalCode' id={`nationalCode-${type}`}  
              value={userData.nationalCode || ''}
              onChange={e => setUserData(prev => ({ ...prev, nationalCode: e.target.value }))}/>
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`gender-${type}`}>
              جنسیت
            </Label>
            <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`gender-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={genderOptions}
             value={genderOptions.find(opt => opt.value === userData?.gender)}
               onChange={(selected) => setUserData(prev => ({ ...prev, gender: selected.value }))}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`userAbout-${type}`}>
              درباره کاربر
            </Label>
            <Input type='text' name='userAbout' id={`userAbout-${type}`} 
             value={userData.userAbout || ''}
              onChange={e => setUserData(prev => ({ ...prev, userAbout: e.target.value }))}/>
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>قبلی</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default PersonalInfo
