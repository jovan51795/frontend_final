import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CTableBody,
  CButton,
} from '@coreui/react'
import React from 'react'

const StudentSubjects = ({ subjects }) => {
  let totalUnits = 0
  subjects.forEach((subject) => {
    totalUnits += subject.units
  })
  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Subject List</strong>
        </CCardHeader>
        <CCardBody>
          <CTable hover align="middle">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">Professor</CTableHeaderCell>
                <CTableHeaderCell scope="col">Units</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {subjects.map((subject) => (
                <CTableRow key={subject.subject_id}>
                  <CTableDataCell>{subject.subjectCode}</CTableDataCell>
                  <CTableDataCell>{subject.subjectTitle}</CTableDataCell>
                  <CTableDataCell>
                    {subject.professor.firstName} {subject.professor.lastName}
                  </CTableDataCell>
                  <CTableDataCell>{subject.units}</CTableDataCell>
                </CTableRow>
              ))}

              <CTableRow>
                <CTableDataCell colSpan={3} style={{ textAlign: 'right' }}>
                  <b>Total Units:</b>
                </CTableDataCell>
                <CTableDataCell>{totalUnits}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default StudentSubjects
