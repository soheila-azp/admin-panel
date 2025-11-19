// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

const SocialLinks = ({ stepper, type, userData, setUserData }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>شبکه های اجتمایی</h5>
        <small>لینک شبکه های اجتمایی را اضافه کنید</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`linkdinProfile-${type}`}>
              لینکداین
            </Label>
            <Input type='text' id={`linkdinProfile-${type}`} name='linkdinProfile' 
             value={userData.linkdinProfile || ''}
              onChange={e => setUserData(prev => ({ ...prev, linkdinProfile: e.target.value }))}/>
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`telegramLink-${type}`}>
              تلگرام
            </Label>
            <Input type='text' id={`telegramLink-${type}`} name='telegramLink' 
             value={userData.telegramLink || ''}
              onChange={e => setUserData(prev => ({ ...prev, telegramLink: e.target.value }))}/>
          </Col>
        </Row>
        <Row>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>قبلی</span>
          </Button>
          <Button color='success' className='btn-submit' onClick={() => alert('submitted')}>
            ارسال
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
