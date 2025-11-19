import React, { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { reservedCo } from '../../Services/Api/Panel'
import DataTable from 'react-data-table-component'
import { Input, Card } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'

// 📁 ستون‌ها رو از فایل جداگانه بیار
import { columns } from './ReservedCourses/columns'

const ReservedCourses = () => {
  const { data: reserves = [] } = useQuery({
    queryKey: ['reserves'],
    queryFn: reservedCo
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const filteredData = useMemo(() => {
    return reserves.filter(item => {
      const matchesSearch = item?.courseName?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus =
        statusFilter === '' ||
        (statusFilter === 'accepted' && item.accept === true) ||
        (statusFilter === 'not-accepted' && item.accept === false)

      return matchesSearch && matchesStatus
    })
  }, [reserves, searchTerm, statusFilter])

  const paginatedData = useMemo(() => {
    const start = currentPage * rowsPerPage
    return filteredData.slice(start, start + rowsPerPage)
  }, [filteredData, currentPage, rowsPerPage])

  const handlePageChange = ({ selected }) => setCurrentPage(selected)

  return (
    <Card className='p-2'>
      {/* 🔍 فیلتر بالا */}
      <div className='d-flex justify-content-between align-items-center mb-2 gap-2 flex-wrap'>
        <Input
          type='text'
          placeholder='جستجو'
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value)
            setCurrentPage(0)
          }}
          style={{ maxWidth: 250 }}
        />

        <Input
          type='select'
          value={statusFilter}
          onChange={e => {
            setStatusFilter(e.target.value)
            setCurrentPage(0)
          }}
          style={{ maxWidth: 200 }}
        >
          <option value=''>همه وضعیت‌ها</option>
          <option value='accepted'>تایید شده</option>
          <option value='not-accepted'>رد شده</option>
        </Input>

        <Input
          type='select'
          value={rowsPerPage}
          onChange={e => {
            setRowsPerPage(Number(e.target.value))
            setCurrentPage(0)
          }}
          style={{ maxWidth: 120 }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </Input>
      </div>

      {/* 🧾 جدول دیتا */}
      <DataTable
        noHeader
        columns={columns}
        data={paginatedData}
        sortIcon={<ChevronDown />}
        pagination={false}
        responsive
        className='react-dataTable'
      />

      {/* 📄 پیجینیشن */}
      <div className='mt-2'>
        <ReactPaginate
          previousLabel='قبلی'
          nextLabel='بعدی'
          breakLabel='...'
          pageCount={Math.ceil(filteredData.length / rowsPerPage)}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          containerClassName='pagination justify-content-center'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          nextClassName='page-item'
          previousLinkClassName='page-link'
          nextLinkClassName='page-link'
          activeClassName='active'
        />
      </div>
    </Card>
  )
}

export default ReservedCourses
