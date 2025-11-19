import React from 'react'

import { CourseAList } from '../../Services/Api/Panel'
import { useQuery } from '@tanstack/react-query'

// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

// ** Table Columns
import { columns } from './courseList/columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Button, Input, Row, Col, Card } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'





const CoursesList = () => {
  // ** Store vars


  const [PageNumber,setPageNumber]=useState(1)
  const [RowsOfPage,setRowsOfPage]=useState(10)
  const [Query,setQuery]=useState("")

  
  const dataTa = useQuery({
    queryKey: ['courses', {
      PageNumber: PageNumber,
      RowsOfPage: RowsOfPage,
      Query: Query
    }],
    queryFn: async ({queryKey}) =>{
    const [,params]=queryKey
    return await CourseAList(params)
  }
 })

  const handleFilter =val=>{
    setQuery(val)
    setPageNumber(1)
  }
  const handleRowsChange=e=>{
    const val =parseInt(e.target.value,10)
    setRowsOfPage(val)
    setPageNumber(1)
  }
  
  const headerMemo = useMemo(()=>{
    return(
       <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center me-2'>
            <label htmlFor='rows-per-page'>نمایش</label>
            <Input
              type='select'
              id='rows-per-page'
              value={RowsOfPage}
              onChange={handleRowsChange}
              className='form-control ms-50 pe-3'
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </Input>
          </div>
          <Button tag={Link}  color='primary'>
            افزودن دوره
          </Button>
        </Col>
        <Col
          lg='6'
          className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0'
        >
          <div className='d-flex align-items-center'>
            <label htmlFor='search-invoice'>جستجو</label>
            <Input
              id='search-invoice'
              className='ms-50 me-2 w-100'
              type='text'
              value={Query}
              onChange={e => handleFilter(e.target.value)}
              placeholder='جستجو'
            />
          </div>
          {/* <Input className='w-auto ' type='select' value={statusValue} onChange={handleStatusValue}>
            <option value=''>Select Status</option>
            <option value='downloaded'>Downloaded</option>
            <option value='draft'>Draft</option>
            <option value='paid'>Paid</option>
            <option value='partial payment'>Partial Payment</option>
            <option value='past due'>Past Due</option>
            <option value='sent'>Sent</option>
          </Input> */}
        </Col>
      </Row>
    </div>
    )
  },[RowsOfPage,Query]
  )



 const CustomPagination=()=>{
  const total =dataTa?.data?.total || 1
  const count =Math.ceil(total/RowsOfPage)
  return(
    <ReactPaginate
     nextLabel=''
        breakLabel='...'
        previousLabel=''
    pageCount={count||1}
    activeClassName='active'
        breakClassName='page-item'
        pageClassName='page-item'
        breakLinkClassName='page-link'
        nextLinkClassName='page-link'
        pageLinkClassName='page-link'
        nextClassName='page-item next'
        previousLinkClassName='page-link'
        previousClassName='page-item prev'
    onPageChange={PageNumber=>setPageNumber(PageNumber.selected+1)}
    forcePage={PageNumber-1}
    containerClassName='pagination react-paginate justify-content-end p-1'
    />
  )
 }

  return (
    <div className='invoice-list-wrapper'>
      <Card>
        <div className='invoice-list-dataTable react-dataTable'>
          <DataTable
            noHeader
            pagination
            sortServer
            paginationServer
            subHeader={true}
            columns={columns}
            responsive={true}
            // onSort={handleSort}
            data={dataTa.data?.list || []}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='invoiceId'
            paginationDefaultPage={PageNumber}
            paginationComponent={CustomPagination}
            subHeaderComponent={headerMemo}
          />
        </div>
      </Card>
    </div>
  )
}

export default CoursesList
