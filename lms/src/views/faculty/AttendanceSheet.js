import React, { useState } from 'react'
import { CSmartTable } from '@coreui/react-pro'
import { CBadge, CFormCheck, CButton, CCollapse, CCardBody } from '@coreui/react'
import { studentsData } from '../data/AttendanceTableData'

const AttendanceSheet = () => {
  const [details, setDetails] = useState([])

  const columns = [
    { key: 'StudentNo', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'FirstName', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'MiddleName', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'LastName', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'Course', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'YearLevel', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'Attendance', filter: false, sorter: false, _style: { width: '15%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      //   _props: { color: 'primary', className: 'fw-semibold' },
    },
  ]

  const getAttendance = (Attendance) => {
    switch (Attendance) {
      case true:
        return 'Present'
      case false:
        return 'Absent'
      default:
        return 'Present'
    }
  }

  const getBadge = (Attendance) => {
    switch (Attendance) {
      case true:
        return 'success'
      case false:
        return 'danger'
      default:
        return 'success'
    }
  }

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  return (
    <CSmartTable
      activePage={1}
      cleaner
      clickableRows
      columns={columns}
      columnFilter
      columnSorter
      //   footer
      items={studentsData}
      itemsPerPageSelect
      itemsPerPage={5}
      pagination
      scopedColumns={{
        Attendance: (item) => (
          <td>
            <CBadge color={getBadge(item.Attendance)}>{getAttendance(item.Attendance)}</CBadge>
          </td>
        ),
        show_details: (item) => {
          return (
            <td className="py-2">
              <CFormCheck
                button={{ color: 'secondary', variant: 'outline' }}
                id="btn-check-2-outlined"
                autoComplete="off"
                label="Present"
                defaultChecked
              />
            </td>
          )
        },
      }}
      //   selectable
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
export default AttendanceSheet
