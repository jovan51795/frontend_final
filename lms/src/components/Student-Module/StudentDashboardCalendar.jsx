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
  const EventSettingsModel = {
    dataSource: [
      // schedules,
      {
        Id: 1,
        Subject: 'English Subject',
        StartTime: new Date(2022, 9, 10, 4, 0),
        EndTime: new Date(2022, 9, 10, 6, 0),
        Repeat: true,
      },
    ],
  }

  return (
    <>
      <ScheduleComponent currentView="Week" eventSettings={EventSettingsModel}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </>
  )
}

export default StudentDashboardCalendar
