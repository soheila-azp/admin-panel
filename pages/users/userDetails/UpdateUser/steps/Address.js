// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'

const Address = ({ stepper, type, userData, setUserData }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>آدرس</h5>
        <small>آدرس را اضافه کنید</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`homeAdderess-${type}`}>
              آدرس
            </Label>
            <Input
              type='text'
              id={`homeAdderess-${type}`}
              name={`homeAdderess-${type}`}
              value={userData.homeAdderess || ''}
              onChange={e => setUserData(prev => ({ ...prev, homeAdderess: e.target.value }))}
            />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`longitude-${type}`}>
              طول جغرافیایی
            </Label>
            <Input type='text' name={`longitude-${type}`} id={`longitude-${type}`}  
             value={userData.longitude || ''}
              onChange={e => setUserData(prev => ({ ...prev, longitude: e.target.value }))}/>
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`latitude-${type}`}>
              عرض جغرافیایی
            </Label>
            <Input type='text' name={`latitude-${type}`} id={`latitude-${type}`}  
             value={userData.latitude || ''}
              onChange={e => setUserData(prev => ({ ...prev, latitude: e.target.value }))}/>
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

export default Address
