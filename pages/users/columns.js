// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
 import Avatar from '@components/avatar'

// ** Store & Actions
//  import { store } from '@store/store'
// import { deleteInvoice } from '../courseList/store'

// ** Reactstrap Imports
// import {
//   Badge,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   UncontrolledTooltip,
//   UncontrolledDropdown
// } from 'reactstrap'

// ** Third Party Components
// import {
//   Eye,
//   Send,
//   Edit,
//   Copy,
//   Save,
//   Info,
//   Trash,
//   PieChart,
//   Download,
//   TrendingUp,
//   CheckCircle,
//   MoreVertical,
//   ArrowDownCircle
// } from 'react-feather'

// ** Vars
// const invoiceStatusObj = {
//   Sent: { color: 'light-secondary', icon: Send },
//   Paid: { color: 'light-success', icon: CheckCircle },
//   Draft: { color: 'light-primary', icon: Save },
//   Downloaded: { color: 'light-info', icon: ArrowDownCircle },
//   'Past Due': { color: 'light-danger', icon: Info },
//   'Partial Payment': { color: 'light-warning', icon: PieChart }
// }

// ** renders client column
const getUserAvatar = row => {
  const colors = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary']
  const color = colors[Math.floor(Math.random() * colors.length)]

  if (row.pictureAddress && row.pictureAddress !== 'Not-set') {
    return <Avatar className='me-50' img={row.pictureAddress} width='32' height='32' />
  }

  return <Avatar color={color} className='me-50' content={`${row.fname?.[0] || ''}`} initials />
}


// ** Table columns
export const columns = [
  {
    name: 'نام',
    sortable: false,
    sortField: 'id',
    minWidth: '107px',
    // selector: row => row.id,
    cell: row => (
  <div className="d-flex align-items-center">
    {getUserAvatar(row)}
    <Link to={`/userDetail/${row.id}`}>{`${row.fname} ${row.lname}`}</Link>
  </div>
)

  },
  {
    name: 'ایمیل',
    sortable: true,
    sortField: 'id',
    minWidth: '107px',
    // selector: row => row.id,
    cell: row => row.gmail
  },
  {
    name: ' شماره موبایل',
    sortable: true,
    minWidth: '150px',
    sortField: 'total',
    // selector: row => row.total,
    cell: row => <span>{row.phoneNumber}</span>
  },
  {
    sortable: true,
    minWidth: '200px',
    name: 'تاریخ',
    sortField: 'dueDate',
    cell: row => row.insertDate
    // selector: row => row.dueDate
  },
  {
    sortable: true,
    name: 'وضعیت',
    minWidth: '164px',
    sortField: 'balance',
    // selector: row => row.balance,
    cell: row => {
      return row.active !== true ? (
        <span>فعال</span>
      ) : (
        <span>غیر فعال</span>
      )
    }
  },
  
]

// export default columns