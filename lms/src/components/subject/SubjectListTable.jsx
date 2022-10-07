import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CTable } from '@coreui/react'

const SubjectListTable = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
<<<<<<<< HEAD:lms/src/components/subject/SubjectListTable.jsx
            <strong>Subject List</strong>
========
            <strong>Student List</strong>
>>>>>>>> dcfa485f1e866305b9cc30e35999a39103a4f17f:lms/src/components/students/StudentsListTable.jsx
          </CCardHeader>
          <CCardBody>
            <CTable></CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SubjectListTable
