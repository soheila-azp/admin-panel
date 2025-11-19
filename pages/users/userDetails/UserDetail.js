// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'
import { getUserDetail } from '../../../Services/Api/Panel'

// ** Store & Actions
// import { getUser } from '../store'
// import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap Imports
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
// import UserTabs from './Tabs'
// import PlanCard from './PlanCard'
 import UserInfoCard from './UserInfoCard/UserInfoCard'

// ** Styles
import '@styles/react/apps/app-users.scss'
// import { useLocation } from 'react-router-dom'

const UserDetail = () => {
  // ** Store Vars
//   const store = useSelector(state => state.users)
//   const dispatch = useDispatch()

  // ** Hooks
   const { id } = useParams()
// const location = useLocation()
// const id = location.state?.id
console.log("🟡 id from params:", id)
  const selectedUser = useQuery({
    queryKey: ['userDetails', id],
    queryFn: () => getUserDetail(id),
    enabled: !!id // فقط وقتی id وجود داره اجرا شه
  })
console.log(" selectedUser:", selectedUser.data)
// if (selectedUser.isLoading) return <p>Loading...</p>
// if (selectedUser.isError || !selectedUser.data) return <Alert>...</Alert>
  // ** Get suer on mount
//   useEffect(() => {
//     dispatch(getUser(parseInt(id)))
//   }, [dispatch])

  const [active, setActive] = useState('1')

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  console.log("🔍 selectedUser.isLoading:", selectedUser.isLoading)
  console.log("🔍 selectedUser.isError:", selectedUser.isError)
  console.log("🔍 selectedUser.data:", selectedUser.data)
  
  return selectedUser !== null && selectedUser !== undefined ? (
    <div>
      
          <UserInfoCard selectedUser={selectedUser.data} />
          {/* <span className='text-primary'>User ID: {id}</span> */}
          {/* <PlanCard /> */}
        
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>User not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default UserDetail