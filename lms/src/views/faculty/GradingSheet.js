import React from 'react'
import { CSmartTable } from '@coreui/react-pro'
import { studentsData } from '../data/AttendanceTableData'
import { Btn } from 'src/styles/Btn.styles.'
import 'src/scss/_custom.scss'

const GradingSheet = () => {
  const columns = [
    { key: 'StudentNo', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'FirstName', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'MiddleName', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'LastName', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'Course', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'YearLevel', filter: false, sorter: false, _style: { width: '15%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      //   _props: { color: 'primary', className: 'fw-semibold' },
    },
  ]

  return (
    <CSmartTable
      activePage={1}
      cleaner
      clickableRows
      columns={columns}
      columnFilter
      columnSorter
      items={studentsData}
      itemsPerPageSelect
      itemsPerPage={5}
      pagination
      scopedColumns={{
        show_details: (item) => {
          return (
            <td className="py-2">
              <Btn>Evaluate</Btn>
            </td>
          )
        },
      }}
      sorterValue={{ column: 'StudentNo', state: 'asc' }}
      tableFilter
      tableHeadProps={{
        color: 'secondary',
      }}
      tableProps={{
        striped: true,
        hover: true,
      }}
    />
  )
}

export default GradingSheet
