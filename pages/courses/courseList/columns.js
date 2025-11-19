// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
  // import Avatar from '@components/avatar'

// ** Store & Actions
 import { store } from '@store/store'
import { deleteInvoice } from '../courseList/store'

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown
} from 'reactstrap'

// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Copy,
  Save,
  Info,
  Trash,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle
} from 'react-feather'
 import Avatar from '@components/avatar'
// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
// 
const getUserAvatar = row => {
  const colors = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary']
  const color = colors[Math.floor(Math.random() * colors.length)]

  if (row.tumbImageAddress && row.tumbImageAddress !== 'Not-set') {
    return <Avatar className='me-50' img={row.tumbImageAddress} width='32' height='32' />
  }

  return <Avatar color={color} className='me-50' content={`${row.title?.[0] || ''}`} initials />
}

// ** Table columns
export const columns = [
  {
    name: 'نام',
    sortable: true,
    sortField: 'id',
    minWidth: '107px',
    // selector: row => row.id,
    // cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`${row.title}`}</Link>
     cell: row => (
      <div className="d-flex align-items-center">
        {getUserAvatar(row)}
        <Link to={`/CourseDetails/${row.courseId}`}>{`${row.title}`}</Link>
      </div>)
  },
  {
    name: 'نام مدرس',
    sortable: true,
    sortField: 'id',
    minWidth: '107px',
    // selector: row => row.id,
    cell: row => <Link to={`/userDetail/${row.id}`}>{`${row.fullName}`}</Link>
  },
  // {
  //   sortable: true,
  //   minWidth: '102px',
  //   // sortField: 'invoiceStatus',
  //   name: <TrendingUp size={14} />,
  //   // selector: row => row.invoiceStatus,
  //   cell: row => {
  //     // const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary',
  //     //   Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Edit
  //     return (
  //       <Fragment>
  //          <Info size={16} id={`av-tooltip-${row.id}`} className='text-primary cursor-pointer me-50' />
  //         <UncontrolledTooltip placement='top' target={`av-tooltip-${row.id}`}>
  //           <span className='fw-bold'>{row.typeName}</span>
  //           <br />
  //           <span className='fw-bold'>Balance:</span> {row.cost}
  //           <br />
  //           <span className='fw-bold'>Due Date:</span> {row.lastUpdate}
  //         </UncontrolledTooltip>
  //       </Fragment>
  //     )
  //   }
  // },
  {
    name: 'قیمت دوره',
    sortable: true,
    minWidth: '150px',
    sortField: 'total',
    // selector: row => row.total,
    cell: row => <span>${row.cost || 0}</span>
  },
  {
    sortable: true,
    minWidth: '200px',
    name: 'وضعیت برگزاری',
    sortField: 'dueDate',
    cell: row => row.statusName
    // selector: row => row.dueDate
  },
  {
    sortable: true,
    name: 'وضعیت',
    minWidth: '164px',
    sortField: 'balance',
    // selector: row => row.balance,
    cell: row => {
      return row.isActive !== true ? (
        <span>فعال</span>
      ) : (
        <span>غیر فعال</span>
      )
    }
  },
  {
    sortable: true,
    name: 'وضعیت',
    minWidth: '164px',
    sortField: 'balance',
    // selector: row => row.balance,
    cell: row => {
      return row.isdelete !== true ? (
        <span>حذف نشده </span>
      ) : (
        <span>حذف شده</span>
      )
    }
  },
  {
    name: 'Action',
    minWidth: '110px',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <Send className='cursor-pointer' size={17} id={`send-tooltip-${row.id}`} />
        <UncontrolledTooltip placement='top' target={`send-tooltip-${row.id}`}>
          Send Mail
        </UncontrolledTooltip>
        <Link to={`/apps/invoice/preview/${row.id}`} id={`pw-tooltip-${row.id}`}>
          <Eye size={17} className='mx-1' />
        </Link>
        <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
          Preview Invoice
        </UncontrolledTooltip>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Download size={14} className='me-50' />
              <span className='align-middle'>Download</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
              <Edit size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteInvoice(row.id))
              }}
            >
              <Trash size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Copy size={14} className='me-50' />
              <span className='align-middle'>Duplicate</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]

export default columns