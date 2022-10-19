import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import StudentDashboardWidgetsDropdown from 'src/components/Student-Module/StudentDashboardWidgets'

import StudentNews from 'src/components/Student-Module/StudentNews'

const StudentDashboard = () => {
  return (
    <>
      <StudentDashboardWidgetsDropdown />
      <CCard className="mb-4">
        <CCardHeader>
          <strong>ABCUniversity News</strong>
        </CCardHeader>
        <CCardBody style={{ height: '500px', width: 'auto', overflow: 'scroll auto' }}>
          <StudentNews />
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentDashboard
