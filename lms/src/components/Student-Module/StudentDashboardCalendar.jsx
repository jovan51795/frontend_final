import React, { useState, useEffect } from 'react'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  EventSettingsModel,
} from '@syncfusion/ej2-react-schedule'

const StudentDashboardCalendar = ({ schedules }) => {
  // const EventSettingsModel = {
  //   dataSource: [
  //     {
  //       Subject: 'English Subject1',
  //       StartTime: new Date(2022, 9, 10, 4, 0),
  //       EndTime: new Date(2022, 9, 10, 6, 0),
  //       RecurrenceRule: 'FREQ=WEEKLY;COUNT=50',
  //     },

  //     {
  //       Subject: 'Math Subject1',
  //       StartTime: new Date(2022, 9, 10, 3, 0),
  //       EndTime: new Date(2022, 9, 10, 4, 0),
  //       RecurrenceRule: 'FREQ=WEEKLY;COUNT=50',
  //     },
  //   ],
  // }

  const events = {
    dataSource: schedules,
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
