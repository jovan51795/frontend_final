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
import { getUserInfo } from 'src/services/userInfo'

const StudentSubjects = () => {
  const subjects = getUserInfo().object.subject
  console.log(getUserInfo().object)
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
                  <CTableDataCell>MATH123</CTableDataCell>
                  <CTableDataCell>Basic Calculus</CTableDataCell>
                  <CTableDataCell>Teacher1</CTableDataCell>
                  <CTableDataCell>5</CTableDataCell>
                </CTableRow>
              ))}

              <CTableRow>
                <CTableDataCell colSpan={3} style={{ textAlign: 'right' }}>
                  <b>Total Units:</b>
                </CTableDataCell>
                <CTableDataCell>Total</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CButton color="success" size="sm">
            <span className="text-light">Add Subject</span>
          </CButton>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default StudentSubjects
