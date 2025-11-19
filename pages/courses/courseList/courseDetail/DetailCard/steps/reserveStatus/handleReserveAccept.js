// reserveActions.js یا ReserveAccept.js (هر نامی که واضح باشه)

import { acceptReserve } from '../../../../../../../Services/Api/Panel'

export const handleReserveAccept = async ({ reserved, courseGroupId, refetch }) => {
  try {
    const userData = {
       courseId: reserved.courseId,
      courseGroupId: courseGroupId,
      studentId: reserved.studentId
    }

    await acceptReserve(userData)
    refetch()
  } catch (error) {
    console.error("خطا در تایید رزرو:", error)
  }
}
