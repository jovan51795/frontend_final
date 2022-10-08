import React, { useState } from 'react'
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

const StudentDashboardCalendar = () => {
  const EventSettingsModel = {
    dataSource: [
      {
        StartTime: new Date(2022, 9, 10, 4, 0),
        EndTime: new Date(2022, 9, 10, 6, 0),
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
