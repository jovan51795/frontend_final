import React from 'react'

import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const StudentAttendance = ({ data }) => {
  console.log(data)
  return (
    <CTable hover align="middle">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Date</CTableHeaderCell>
          <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
            Status
          </CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((x) => (
          <CTableRow key={x}>
            <CTableDataCell>{x[1]}</CTableDataCell>
            <CTableDataCell style={{ textAlign: 'center' }}>
              {x[0] ? 'Present' : 'Absent'}
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

export default StudentAttendance
