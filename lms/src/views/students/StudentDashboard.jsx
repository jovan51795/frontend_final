import React from 'react'
import { useState } from 'react'
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
import StudentDashboardCalendar from 'src/components/Student-Module/StudentDashboardCalendar'

const StudentDashboard = () => {
  return (
    <>
      <StudentDashboardWidgetsDropdown />
      <CCard className="mb-12">
        <CCardHeader>
          <strong>Schedule</strong>
        </CCardHeader>
        <CCardBody>
          <StudentDashboardCalendar />
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentDashboard
