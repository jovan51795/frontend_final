import React from 'react'
import { useState, useEffect } from 'react'
import * as scheduleService from 'src/services/scheduleService'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import StudentDashboardCalendar from 'src/components/Student-Module/StudentDashboardCalendar'

const StudentSchedule = () => {
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

  schedule.map((sched) => {
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
      <CCard className="mb-4">
        <CCardHeader>
          <strong>My Schedule</strong>
        </CCardHeader>
        <CCardBody style={{ height: '800px', width: 'auto', overflow: 'scroll', overflow: 'auto' }}>
          <StudentDashboardCalendar schedules={studentSchedules} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentSchedule
