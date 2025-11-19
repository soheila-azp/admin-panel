import React from 'react'
import { getReserves, GetCourseGroup } from '../../../../../../Services/Api/Panel'
import { useQuery } from '@tanstack/react-query'
import { Row, Col } from 'reactstrap'
import { Check, Trash } from 'react-feather'
import ReserveDelete from './reserveStatus/ReserveDelete'
import { handleReserveAccept } from './reserveStatus/handleReserveAccept' // ← تابع جدید

const Reserves = ({ courseDetails }) => {
  const courseId = courseDetails?.courseId
  const teacherId = courseDetails?.teacherId
  const [selectedAction, setSelectedAction] = React.useState(null)

  const statusColors = {
    true: 'text-success',
    false: 'text-danger',
    inactive: 'light-secondary'
  }
  const getCourse = useQuery({
    queryKey: ['groups', teacherId, courseId],
    queryFn: () => GetCourseGroup(teacherId, courseId)
  })
  const courseGroupId = getCourse.data?.[0]?.groupId

  const userReserve = useQuery({
    queryKey: ['users', courseId],
    queryFn: () => getReserves(courseId),
    enabled: !!courseId
  })

  const handleAcceptClick = (reserved) => {
    handleReserveAccept({
      reserved,
      courseGroupId,
      refetch: userReserve.refetch
    })
  }

  const handleDeleteClick = (reserved) => {
    setSelectedAction({ type: 'delete', reserved })
  }

  return (
    <div>
      <Row className="mb-2 fw-bold text-primary">
        <Col xl='3'>نام رزرو کننده</Col>
        <Col xl='4'>زمان رزرو</Col>
        <Col xl='2'>وضعیت رزرو</Col>
        <Col xl='3'>عملیات</Col>
      </Row>

      {userReserve.data?.map((reserved, index) => (
        <Row key={index} className="mb-1 align-items-center">
          <Col xl='3'>{reserved.studentName}</Col>
          <Col xl='4'>{reserved.reserverDate}</Col>
          <Col xl='2'  className={statusColors[reserved?.accept]}>{reserved.accept ? 'تایید شده' : 'تایید نشده'}</Col>
          <Col xl='3'>
            {!reserved.accept && (
              <div className='d-flex gap-2'>
                <Check
                  size={20}
                  className='cursor-pointer text-success'
                  onClick={() => handleAcceptClick(reserved)}
                />
                <Trash
                  size={20}
                  className='cursor-pointer text-danger'
                  onClick={() => handleDeleteClick(reserved)}
                />
              </div>
            )}
          </Col>
        </Row>
      ))}

      {selectedAction?.type === 'delete' && (
        <ReserveDelete
          reserved={selectedAction.reserved}
          refetch={userReserve.refetch}
          onClose={() => setSelectedAction(null)}
        />
      )}
    </div>
  )
}

export default Reserves
