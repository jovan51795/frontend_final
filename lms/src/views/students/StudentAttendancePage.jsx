import React from 'react'
import StudentAttendance from 'src/components/Student-Module/StudentAttendance'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const StudentAttendancePage = () => {
  return (
    <CCard>
      <CCardHeader>
        <strong>Attendance Chart</strong>
      </CCardHeader>
      <CCardBody style={{ height: '400px', overflow: 'scroll', width: '100%', overflow: 'auto' }}>
        <StudentAttendance />
      </CCardBody>
    </CCard>
  )
}

export default StudentAttendancePage
