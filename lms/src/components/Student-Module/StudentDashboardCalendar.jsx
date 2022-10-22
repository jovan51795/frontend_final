import React, { useState, useEffect } from 'react'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from '@syncfusion/ej2-react-schedule'

const StudentDashboardCalendar = ({ schedules }) => {
  const studentSchedules = []

  schedules.map((sched) => {
    let time = sched[1] ? sched[1].split('-') : '00:00-00:00'
    let startTime = ''
    let endTime = ''
    startTime = time[0]
    endTime = time[1]
    studentSchedules.push({
      Subject: sched[4],
      StartTime: new Date(sched[2] + ' ' + startTime),
      EndTime: new Date(sched[2] + ' ' + endTime),
      RecurrenceRule: 'FREQ=WEEKLY;COUNT=50',
    })
  })

  const events = {
    dataSource: studentSchedules,
  }

  return (
    <>
      <ScheduleComponent currentView="Month" eventSettings={events}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </>
  )
}

export default StudentDashboardCalendar
