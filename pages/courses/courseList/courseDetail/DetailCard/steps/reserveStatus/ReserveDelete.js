import React from 'react'

const ReserveDelete = ({ reserved, refetch, onClose }) => {
  const handleApprove = async () => {
    await someApproveAPI(reserved.id)
    refetch()
    onClose() // بستن حالت
  }

  return (
    <div>
      {handleApprove()}
    </div>
  )
}

export default ReserveDelete
