import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { deleteUser } from '../../../../../Services/Api/Panel'

const UserDelete = ({ closeModal, userId }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteUser(userId)
      alert('کاربر با موفقیت حذف شد!')
      closeModal()
    } catch (error) {
      console.error('خطا در حذف کاربر:', error)
      alert('خطا در حذف کاربر.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className='content-header'>
      <div className='my-2'>آیا می‌خواهید این کاربر را حذف کنید؟</div>
      <div className='d-flex justify-content-between'>
        <Button color='danger' onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? 'در حال حذف...' : 'حذف'}
        </Button>
        <Button color='secondary' onClick={closeModal}>
          خروج
        </Button>
      </div>
    </div>
  )
}

export default UserDelete


