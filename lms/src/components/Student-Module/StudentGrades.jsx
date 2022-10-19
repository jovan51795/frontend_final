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

const StudentGrades = ({ grades, userInfo }) => {
  let totalUnits = 0
  let totalProduct = 0
  grades.forEach((grade) => {
    totalUnits += grade[2]
    totalProduct += grade[2] * grade[3]
  })
  const ave = totalProduct / totalUnits

  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>
            {userInfo.sem} {userInfo.academicYear}
          </strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover align="middle">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                <CTableHeaderCell scope="col">Grades</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {grades.map((grade) => (
                <CTableRow key={grade[1]}>
                  <CTableDataCell>{grade[1]}</CTableDataCell>
                  <CTableDataCell>{grade[0]}</CTableDataCell>
                  <CTableDataCell>{grade[2]}</CTableDataCell>
                  <CTableDataCell>{grade[3]}</CTableDataCell>
                  <CTableDataCell>{grade[5]}</CTableDataCell>
                </CTableRow>
              ))}
              <CTableRow>
                <CTableDataCell colSpan={3} style={{ textAlign: 'right' }}>
                  <b>Average:</b>
                </CTableDataCell>
                <CTableDataCell colSpan={2}>{ave}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default StudentGrades
