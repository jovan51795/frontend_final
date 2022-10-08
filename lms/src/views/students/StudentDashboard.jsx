import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import StudentDashboardWidgetsDropdown from 'src/components/Student-Module/StudentDashboardWidgets'

const StudentDashboard = () => {
  return (
    <>
      <StudentDashboardWidgetsDropdown />
      <CCard className="mb-12">
        <CCardHeader>
          <strong></strong>
        </CCardHeader>
      </CCard>
    </>
  )
}

export default StudentDashboard
