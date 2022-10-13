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
import StudentDashboardCalendar from 'src/components/Student-Module/StudentDashboardCalendar'
import StudentNews from 'src/components/Student-Module/StudentNews'
import { useState, useEffect } from 'react'
import * as scheduleService from 'src/services/scheduleService'

const StudentDashboard = () => {
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    getScheduleById(2)
  }, [])

  const getScheduleById = (id) => {
    scheduleService.getScheduleById(id).then((res) => {
      if (res.data) {
        setSchedule(res.data.object)
      }
    })
  }

  const currentSchedule = new Date(schedule.startTime)
  // console.log(schedule)

  const sampleSched = {
    Id: schedule.schedule_id,
    Subject: schedule.schedule_subject,
    StartTime: new Date(schedule.startTime),
    EndTime: new Date(schedule.endTime),
  }

  console.log(sampleSched)
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
          <StudentDashboardCalendar schedules={sampleSched} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default StudentDashboard
