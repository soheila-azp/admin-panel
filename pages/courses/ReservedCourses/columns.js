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
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  // if (row.avatar.length) {
  //   return <Avatar className='me-50' img={row.avatar} width='32' height='32' />
  // } else { }
    // return <Avatar color={color} className='me-50' content={row.s ? row.client.name : 'John Doe'} initials />
 
}

// ** Table columns
export const columns = [
  {
    name: 'نام دوره',
    sortable: true,
    sortField: 'id',
    minWidth: '107px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`${row.courseName}`}</Link>
  },
  {
    name: ' نام دانش اموز',
    sortable: true,
    sortField: 'id',
    minWidth: '107px',
    // selector: row => row.id,
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`${row.studentName}`}</Link>
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
    name: 'تاریخ رزرو',
    sortable: true,
    minWidth: '150px',
    sortField: 'total',
    // selector: row => row.total,
    cell: row => <span>{row.reserverDate}</span>
  },
  // {
  //   sortable: true,
  //   minWidth: '200px',
  //   name: 'وضعیت برگزاری',
  //   sortField: 'dueDate',
  //   cell: row => row.statusName
  //   // selector: row => row.dueDate
  // },
  {
    sortable: true,
    name: 'وضعیت رزرو',
    minWidth: '164px',
    sortField: 'balance',
    // selector: row => row.balance,
    cell: row => {
      return row.accept !== true ? (
        <span>رد شده</span>
      ) : (
        <span> تایید شده</span>
      )
    }
  },
  
]

export default columns