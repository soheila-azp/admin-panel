import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCourseDetail } from '../../../../Services/Api/Panel'
import DetailCard from './DetailCard/DetailCard'
import CourseWizard from './DetailCard/CourseWizard'
import {Row,Col} from 'reactstrap'
const CourseDetail = () => {
 const {id}=useParams()
   
 const CourseDetails = useQuery({
        queryKey:['details',id],
        queryFn:()=>getCourseDetail(id)
    })
  return (
<div className='w-100 gap-3'>
 <Row>
 <Col  xl='4' lg='4' xs={{ order: 0 }} md={{ order: 0, size: 4 }}>
    <DetailCard courseDetails={CourseDetails.data} />
  </Col>
  <Col  xl='8' lg='8' xs={{ order: 1 }} md={{ order: 1, size: 8 }}>
    <CourseWizard courseDetails={CourseDetails.data} />
  </Col>
</Row>
</div>
  )
}

export default CourseDetail
