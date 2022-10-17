import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import StudentDashboardWidgetsDropdown from 'src/components/Student-Module/StudentDashboardWidgets'
import StudentDashboardCalendar from 'src/components/Student-Module/StudentDashboardCalendar'
import StudentNews from 'src/components/Student-Module/StudentNews'
import { useState, useEffect } from 'react'
import * as scheduleService from 'src/services/scheduleService'

const StudentDashboard = () => {
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    getSchedules()
  }, [])

  const getSchedules = () => {
    scheduleService.getAll().then((res) => {
      if (res.data) {
        setSchedule(res.data)
      }
    })
  }

  const studentSchedules = []

  const fetchSchedules = schedule.map((sched) => {
    studentSchedules.push({
      Id: sched.schedule_id,
      Subject: sched.schedule_subject,
      StartTime: new Date(sched.startDate + ' ' + sched.startTime),
      EndTime: new Date(sched.startDate + ' ' + sched.endTime),
      RecurrenceRule: 'FREQ=WEEKLY;COUNT=50',
    })
  })

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

      <CCard className="mb-4">
        <CCardHeader>
          <strong>My Schedule</strong>
        </CCardHeader>
        <CCardBody style={{ height: '500px', width: 'auto', overflow: 'scroll auto' }}>
          <StudentDashboardCalendar schedules={studentSchedules} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentDashboard
