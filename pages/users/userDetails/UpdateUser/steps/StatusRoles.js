// ** React Imports
import { Fragment } from 'react'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const StatusRoles = ({ stepper, type, userData, setUserData }) => {
  const statusOptions = [
  { value: true, label: 'فعال' },
  { value: false, label: 'غیرفعال' }
];
const deleteOptions = [
  { value: true, label: 'حذف شده' },
  { value: false, label: 'فعال' }
];
const teacherOptions = [
  { value: true, label: 'بله' },
  { value: false, label: 'خیر' }
];
const studentOptions = [
  { value: true, label: 'بله' },
  { value: false, label: 'خیر' }
];
const twoFactorOptions = [
  { value: true, label: 'فعال' },
  { value: false, label: 'غیرفعال' }
];
const receiveMessageOptions = [
  { value: true, label: 'روشن' },
  { value: false, label: 'خاموش' }
];


  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>وضعیت و ویژگی‌ها</h5>
        <small className='text-muted'>وضعیت و ویژگی‌ها را تغییر دهید</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`username-${type}`}>
              اکتیو
            </Label>
             <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`active-${type}`}
              className='react-select'
              classNamePrefix='select'
               options={statusOptions}
               value={statusOptions.find(opt => opt.value === userData?.active)}
               onChange={(selected) => setUserData(prev => ({ ...prev, active: selected.value }))}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`email-${type}`}>
              حذف
            </Label>
             <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`isDelete-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={deleteOptions}
               value={deleteOptions.find(opt => opt.value === userData?.isDelete)}
               onChange={(selected) => setUserData(prev => ({ ...prev, isDelete: selected.value }))}
            />
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`password-${type}`}>
              معلم
            </Label>
             <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`isTecher-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={teacherOptions}
               value={teacherOptions.find(opt => opt.value === userData?.isTecher)}
               onChange={(selected) => setUserData(prev => ({ ...prev, isTecher: selected.value }))}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`confirm-password-${type}`}>
              دانش آموز
            </Label>
             <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`country-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={studentOptions}
               value={studentOptions.find(opt => opt.value === userData?.isStudent)}
               onChange={(selected) => setUserData(prev => ({ ...prev, isStudent: selected.value }))}
            />
          </Col>
        </Row>
         <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`username-${type}`}>
              دو مرحله ای
            </Label>
             <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`twoStepAuth-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={twoFactorOptions}
               value={twoFactorOptions.find(opt => opt.value === userData?.twoStepAuth)}
               onChange={(selected) => setUserData(prev => ({ ...prev, twoStepAuth: selected.value }))}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`email-${type}`}>
              دریافت پیام
            </Label>
             <Select
              theme={selectThemeColors}
              isClearable={false}
              id={`receiveMessageEvent-${type}`}
              className='react-select'
              classNamePrefix='select'
              options={receiveMessageOptions}
               value={receiveMessageOptions.find(opt => opt.value === userData?.receiveMessageEvent)}
               onChange={(selected) => setUserData(prev => ({ ...prev, receiveMessageEvent: selected.value }))}
            />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
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

export default StatusRoles
