import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import StudentDashboardWidgets from 'src/components/Student-Module/StudentDashboardWidgets'
import * as studentGradesService from 'src/services/gradesService'
import { getUserInfo } from 'src/services/userInfo'
import { useState, useEffect } from 'react'
import StudentNews from 'src/components/Student-Module/StudentNews'

const StudentDashboard = () => {
  const [grades, setGrades] = useState([])
  const userInfo = getUserInfo().object

  useEffect(() => {
    getGrades(userInfo.student_id)
  }, [])

  const getGrades = (id) => {
    studentGradesService.getGradesbyId(id).then((res) => {
      if (res && res.data) {
        setGrades(res.data.object)
      }
    })
  }

  return (
    <>
      <StudentDashboardWidgets grades={grades} />
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
