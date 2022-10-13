import { cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
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

const StudentSubjects = () => {
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
                <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ textAlign: 'center' }}>
                  Actions
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>MATH123</CTableDataCell>
                <CTableDataCell>Basic Calculus</CTableDataCell>
                <CTableDataCell>5</CTableDataCell>
                <CTableDataCell style={{ textAlign: 'center' }}>
                  <CButton color="danger" size="sm">
                    <CIcon icon={cilTrash} className="text-light" size="xs" color="white" />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell colSpan={2} style={{ textAlign: 'right' }}>
                  <b>Total Units:</b>
                </CTableDataCell>
                <CTableDataCell colSpan={2}>Total</CTableDataCell>
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
