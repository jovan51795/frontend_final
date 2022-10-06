import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CTable } from '@coreui/react'

const SubjectListTable = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Subject List</strong>
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
