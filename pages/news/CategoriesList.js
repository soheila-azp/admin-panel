import React, { useState, useEffect ,useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCategoryList } from '../../Services/Api/Panel'
import DataTable from 'react-data-table-component'
import { Input, Card } from 'reactstrap'

const CategoriesList = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['categoriesList'],
    queryFn: getCategoryList
  })

  useEffect(() => {
    const normalizedSearch = searchValue.trim().toLowerCase()
    const filtered = data.filter(item =>
      (item?.categoryName || '').toLowerCase().includes(normalizedSearch)
    )
    setFilteredData(filtered)
  }, [data, searchValue])

  if (isLoading) return <p>در حال بارگذاری...</p>
  if (isError) return <p>خطا در دریافت داده‌ها</p>
  // const paginationData = useMemo(()=> {
  //   const start =currentPage * rowsPerPage
  //   return filteredData.slice(start, start + rowsPerPage)
  // }, [filteredData, currentPage, rowsPerPage]
  // )
  // const handlePageChange = ({selected}) => setCurrentPage(selected)
  return (
    <div className='invoice-list-wrapper'>
      <div>
        <Input
          type='text'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          style={{ maxWidth: 250 }}
          placeholder='جستجوی نام دسته‌بندی...'
        />
        <Input type='select' value={rowsPerPage}
        onChange={e => {setRowsPerPage(Number(e.target.value))
          setCurrentPage(0) }}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </Input>
      </div>
      <Card>
        <DataTable
          noHeader
          pagination
          responsive
          columns={[
            {
              name: 'نام دسته بندی',
              selector: row => row.categoryName,
              minWidth: '200px'
            },
            {
              name: 'توضیحات',
              selector: row => row.googleTitle,
              minWidth: '300px'
            }
          ]}
          data={filteredData}
          className='react-dataTable'
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30]}
        />
      </Card>
    </div>
  )
}

export default CategoriesList
