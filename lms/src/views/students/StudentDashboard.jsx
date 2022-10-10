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
import StudentNews from 'src/components/Student-Module/StudentNews'

const StudentDashboard = () => {
  return (
    <>
      <StudentDashboardWidgetsDropdown />

      <CCard className="mb-4">
        <CCardHeader>
          <strong>ABCUniversity News</strong>
        </CCardHeader>
        <CCardBody>
          <StudentNews />
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>
          <strong>My Schedule</strong>
        </CCardHeader>
        <CCardBody>
          <StudentDashboardCalendar />
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentDashboard
