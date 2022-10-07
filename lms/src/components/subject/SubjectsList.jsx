import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const SubjectsList = () => {
  return (
    <>
      <CRow className="student-list-table">
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <strong>Subjects Table</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Prerequisites</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableDataCell>sample </CTableDataCell>
                  <CTableDataCell>sample </CTableDataCell>
                  <CTableDataCell>sample </CTableDataCell>
                  <CTableDataCell>sample</CTableDataCell>
                  <CTableDataCell>
                    <span className="badge bg-info">active</span>
                  </CTableDataCell>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default SubjectsList
