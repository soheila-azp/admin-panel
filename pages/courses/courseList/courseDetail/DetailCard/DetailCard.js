// ** React Imports
import { useState, Fragment,useRef } from 'react'
// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { BookOpen, Heart } from 'react-feather'
// ** Third Party Components
import Swal from 'sweetalert2'
import Select from 'react-select'
import { Check, Briefcase, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
// import UpdateUser from '../UpdateUser/UpdateUser'
// import UserDelete from './userDelete/UserDelete'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
// import Wizard from "../../../components/wizard"
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const roleColors = {
  editor: 'light-info',
  admin: 'light-danger',
  author: 'light-warning',
  maintainer: 'light-success',
  subscriber: 'light-primary'
}

const statusColors = {
  true: 'light-success',
  false: 'light-warning',
  inactive: 'light-secondary'
}

const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'suspended', label: 'Suspended' }
]

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'dutch', label: 'Dutch' }
]

const MySwal = withReactContent(Swal)

const DetailCard = ({ courseDetails }) => {
  // ** State
//   const [show, setShow] = useState(false)
// const [isEditModalOpen, setEditModalOpen] = useState(false)
// const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

  // ** Hook
//   const {
//     reset,
//     control,
//     setError,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     defaultValues: {
//       username: courseDetails?.id || '',
//       firstName: courseDetails?.fName || '',
//       lastName: courseDetails?.lName || ''
//     }
//   })

  //** render user img
  const renderUserImg = () => {
    if (courseDetails?.imageAddress) {
      return (
        <img
          height='210'
          width='210'
          alt={courseDetails.title}
          src={courseDetails.imageAddress}
          className='img-fluid rounded mt-3 mb-2'
        />
      )
    } else {
      return (
        <Avatar
          initials
          color={ 'light-primary'}
          className='rounded mt-3 mb-2'
          content={courseDetails?.title || '?'}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(48px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '110px',
            width: '110px'
          }}
        />
      )
    }
  }



  // const onSubmit = data => {
  //   if (Object.values(data).every(field => fieldtrim() !== '')) {
  //     setShow(false)
  //   } else {
  //     Object.keys(data).forEach(key => {
  //       if (!data[key]) {
  //         setError(key, { type: 'manual', message: 'This field is required' })
  //       }
  //     })
  //   }
  // }

//    const Courses = () => (
    
//       <Col>
//         {courseDetails?.courses?.length ? courseDetails.courses.map(course => (
//           <Card key={course.id} className="mb-1">
//             <CardBody >
//               <h6>{course.title}</h6>
//               <p>{course.lastUpdate}</p>
//             </CardBody>
//           </Card>
//         )) : <p className='text-center text-muted'>هیچ دوره‌ای ثبت نشده</p>}
//       </Col>
   
//   )
  
//   const ReservedCourses = () => (
    
//       <Col>
//         {courseDetails?.coursesReseves?.length ? courseDetails.coursesReseves.map(course => (
//           <Card key={course.id} className="mb-1">
//             <CardBody>
//               <h6>{course.courseName}</h6>
//               <p>{course.reserverDate}</p>
//             </CardBody>
//           </Card>
//         )) : <p className='text-center text-muted'>هیچ دوره‌ای رزرو نشده</p>}
//       </Col>
   
//   )

// const toggleEditModal = () => setEditModalOpen(prev => !prev)
// const toggleDeleteModal = () => setDeleteModalOpen(prev => !prev)
//   const ref = useRef(null)
  // مراحل ویزارد فقط شامل دوره‌ها
//   const steps = [
//     {
//       id: 'courses', 
//       title: 'دوره‌های کاربر',
//       // subtitle: 'دوره‌های مورد علاقه',
//       icon: <Heart size={18} />,
//       content: <Courses />
//     },
//     {
//       id: 'reserved-courses',
//       title: 'دوره‌های رزرو شده',
//        // subtitle: 'دوره‌های ثبت‌نامی',
//       icon: <BookOpen size={18} />,
//       content: <ReservedCourses />
//     }
//   ]

//   const UserProfileCompletion = ({ profileCompletionPercentage }) => {
//   return (
//     <div style={{ width: 120, height: 120 }}>
//       <CircularProgressbar
//         value={profileCompletionPercentage}
//         text={`${profileCompletionPercentage}%`}
//         styles={buildStyles({
//           textSize: '16px',
//           pathColor: '#7367F0',       // رنگ دایره (مقدار پرشده)
//           textColor: '#7367F0',       // رنگ درصد
//           trailColor: '#e9ecef',      // رنگ زمینه
//           backgroundColor: '#fff'
//         })}
//       />
//     </div>
//   )
// }

  return ( 
    <div className='app-user-view w-100'>
        <Row>
        <Col>
      <Card >
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
               {renderUserImg()} 

            </div>
          </div>
          
          <h4 className='fw-bolder border-bottom px-50 mb-1 text-center'>{courseDetails?.title}</h4>
          <div className='info-container'>
            {courseDetails !== null ? (
              <ul className='list-unstyled'>
                <h4 className='fw-bolder me-25'>جزییات دوره</h4>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام دوره: </span>
                  <span>{courseDetails?.title}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام استاد: </span>
                  <span>{courseDetails?.teacherName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>وضعیت برگزاری:</span>
                  <Badge className='text-capitalize' color={statusColors[courseDetails?.isActive]}>
                    <span>{courseDetails?.isActive ? 'فعال' : 'غیرفعال'}</span>
                  </Badge>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نام کلاس: </span>
                  <span>{courseDetails?.courseClassRoomName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>نحوه برگزاری: </span>
                  <span>{courseDetails?.courseTypeName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>سطح دوره: </span>
                  <span>{courseDetails?.courseLevelName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>تکنولوژی های دوره: </span>
                  <span> {courseDetails?.courseTeches?.map((tech, index) => (
                  <div key={index} className='me-50'>{tech}</div>
                   ))}</span>
                </li>
              </ul>
            ) : null}
          </div>
        </CardBody>
      </Card>
        </Col>
        {/* <Col xl='3' lg='3' xs={{ order: 1 }} md={{ order: 1, size: 3 }}>
        <div style={{ height: '100px' }}>
          <CardBody className='d-flex justify-content-center align-items-center pt-2'  >
            <Button.Ripple color='primary' onClick={toggleEditModal} >ویرایش اطلاعات</Button.Ripple></CardBody>
             <Modal size='lg' isOpen={isEditModalOpen} toggle={toggleEditModal}>
  <ModalBody>
    <UpdateUser closeModal={toggleEditModal} userId={courseDetails?.id}/>
  </ModalBody>
</Modal>
        </div>
        <Card style={{ height: '400px' }}>
        <CardBody>
          
          <h4 className='fw-bolder border-bottom px-50 mb-1 text-center'>راه های ارتباطی کاربر</h4>
          <div className='info-container'>
            {courseDetails !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>شماره موبایل: </span>
                  <span>{courseDetails?.phoneNumber}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>ایمیل: </span>
                  <span>{courseDetails?.gmail}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>لینکداین: </span>
                   <span>{courseDetails?.linkdinProfile}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>تلگرام: </span>
                  <span>{courseDetails?.telegramLink}</span>
                </li>
              </ul>
            ) : null}
          </div>
        </CardBody>
      </Card>
        </Col> */}
        {/* <Col xl='3' lg='3' xs={{ order: 2 }} md={{ order: 2, size: 3 }}>
        <div style={{ height: '100px' }}>
          <CardBody className='d-flex justify-content-center align-items-center pt-2' >
            <Button.Ripple color='danger' onClick={toggleDeleteModal}>حذف کردن کاربر</Button.Ripple>
            </CardBody>
            <Modal size='sm' isOpen={isDeleteModalOpen} toggle={toggleDeleteModal} >
  <ModalBody>
    <UserDelete closeModal={toggleDeleteModal} userId={courseDetails?.id}/>
  </ModalBody>
</Modal>
        </div>
      <Card style={{ height: '400px' }}>
        <h4 className='fw-bolder border-bottom px-50 mb-1 mt-2 text-center'>درصد تکمیل پروفایل کاربر</h4>
           <CardBody className='d-flex justify-content-center align-items-center'>
                <UserProfileCompletion profileCompletionPercentage={courseDetails?.profileCompletionPercentage || 0} />
        </CardBody>
      </Card>
        </Col> */}
        </Row>
        {/* <Row>
        <Wizard steps={steps} ref={ref} options={{
          linear: false
        }}/></Row> */}
    </div>
  )
}

export default DetailCard
