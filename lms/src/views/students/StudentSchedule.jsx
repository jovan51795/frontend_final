import React from 'react'
import { useState, useEffect } from 'react'
import * as subjecService from 'src/services/subjectService'
import { getUserInfo } from 'src/services/userInfo'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import StudentDashboardCalendar from 'src/components/Student-Module/StudentDashboardCalendar'

const StudentSchedule = () => {
  const [schedules, setSchedules] = useState([])
  const userInfo = getUserInfo().object
  useEffect(() => {
    getSchedules(userInfo.student_id)
  }, [])

  const getSchedules = (id) => {
    subjecService.getStudentScheduleById(id).then((res) => {
      if (res.data) {
        setSchedules(res.data.object)
      }
    })
  }
  console.log(schedules)
  if (schedules) {
    return (
      <>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>My Schedule</strong>
          </CCardHeader>
          <CCardBody
            style={{ height: '800px', width: 'auto', overflow: 'scroll', overflow: 'auto' }}
          >
            <StudentDashboardCalendar schedules={schedules} />
          </CCardBody>
        </CCard>
      </>
    )
  } else {
    return (
      <>
        <div>
          <h1>No Schedules Yet!</h1>
        </div>
      </>
    )
  }
}

export default StudentSchedule
