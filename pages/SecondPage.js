import { Link } from 'react-router-dom'
import { usersList } from '../Services/Api/Panel'
import { useQuery } from '@tanstack/react-query'
import { columns } from './users/columns'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Button, Input, Row, Col, Card, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import React, { useMemo, useState } from 'react'
import NewUer from "./users/NewUser/NewUser"

import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const SecondPage = () => {

  const [value, setValue] = useState('')
  const [sort, setSort] = useState('desc')
  // const [sortColumn, setSortColumn] = useState('id')
  const [currentPage, setCurrentPage] = useState(1)
  // const [statusValue, setStatusValue] = useState('')
  const [roleId, setRoleId] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10) 

  const [isModalOpen, setIsModalOpen] = useState(false)

const toggleModal = () => setIsModalOpen(!isModalOpen)

  const dataTa = useQuery({
    queryKey: ['users', {
      page: currentPage,
      perPage: rowsPerPage,
      Query: value,
      SortingCol: sort,
      roleId: roleId
    }],
    queryFn: async ({ queryKey }) => {
      const [, params] = queryKey
      return await usersList(params) // باید خروجی { list, total, roles } باشه
    }
  })

  const handleFilter = val => {
    setValue(val)
    setCurrentPage(1)
  }

  

  const handleRowsChange = e => {
    const val = parseInt(e.target.value, 10)
    setRowsPerPage(val)
    setCurrentPage(1)
  }



  const headerMemo = useMemo(() => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center me-2'>
            <label htmlFor='rows-per-page'>نمایش</label>
            <Input
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handleRowsChange}
              className='form-control ms-50 pe-3'
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </Input>
          </div>
          <Button color='primary' onClick={toggleModal}>
  افزودن کاربر
</Button>

        </Col>
        <Col lg='6' className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0'>
          <div className='d-flex align-items-center'>
            <label htmlFor='search-invoice'>جستجو</label>
            <Input
              id='search-invoice'
              className='ms-50 me-2 w-100'
              type='text'
              value={value}
              onChange={e => handleFilter(e.target.value)}
              placeholder='جستجوی کاربر'
            />
          </div>
          <Input
            type="select"
            value={roleId}
            onChange={e => setRoleId(e.target.value)}
            className='ms-1'
          >
            <option value="">همه نقش‌ها</option>
            {dataTa.data?.roles?.map(role => (
              <option key={role.id} value={role.id}>{role.roleName}</option>
            ))}
          </Input>
        </Col>
      </Row>
    </div>
  )
}, [rowsPerPage, roleId, dataTa.data?.roles, value])


  const CustomPagination = () => {
    const total = dataTa.data?.total || 0
    const count = Math.ceil(total / rowsPerPage)

    return (
      <ReactPaginate
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        pageCount={count || 1}
        activeClassName='active'
        breakClassName='page-item'
        pageClassName='page-item'
        breakLinkClassName='page-link'
        nextLinkClassName='page-link'
        pageLinkClassName='page-link'
        nextClassName='page-item next'
        previousLinkClassName='page-link'
        previousClassName='page-item prev'
        onPageChange={page => setCurrentPage(page.selected + 1)}
        forcePage={currentPage - 1}
        containerClassName='pagination react-paginate justify-content-end p-1'
      />
    )
  }

  return (
    <div className='invoice-list-wrapper'>
      <Card>
        <div className='invoice-list-dataTable react-dataTable'>
          <DataTable
            pagination
            paginationServer
            subHeader
            columns={columns}
            responsive
            // onSort={handleSort}
            data={dataTa.data?.list || []}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='id'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
          subHeaderComponent={headerMemo}

          />
        </div>
      </Card>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>

  <ModalBody>
    <NewUer closeModal={toggleModal} />
  </ModalBody>
</Modal>

    </div>
  )
}

export default SecondPage
