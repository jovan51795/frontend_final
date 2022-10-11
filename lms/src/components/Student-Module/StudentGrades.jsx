import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'

const StudentGrades = () => {
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>1SY2022</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover align="middle">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                <CTableHeaderCell scope="col">Grades</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>Math123</CTableDataCell>
                <CTableDataCell>Basic Calculus</CTableDataCell>
                <CTableDataCell>Units</CTableDataCell>
                <CTableDataCell>2.0</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell colSpan={3} style={{ textAlign: 'right' }}>
                  <b>Average:</b>
                </CTableDataCell>
                <CTableDataCell>Ave.</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default StudentGrades
