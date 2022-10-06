import { CCard, CCardBody, CCardHeader, CCol, CRow, CTable } from '@coreui/react'
import React from 'react'

const StudentsListTable = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Student List</strong>
          </CCardHeader>
          <CCardBody>
            <CTable></CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default StudentsListTable
