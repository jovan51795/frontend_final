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
    const time = sched[1].split('-')
    const startTime = time[0]
    const endTime = time[1]
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
      <ScheduleComponent currentView="Week" eventSettings={events}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </>
  )
}

export default StudentDashboardCalendar
