import React from 'react'
import Calendar from 'src/components/calendar/Calendar'
import DashboardProfile from 'src/components/faculty/DashboardProfile'

const FacultyDashboard = () => {
  return (
    <div>
      <DashboardProfile />
      <Calendar />
    </div>
  )
}

export default FacultyDashboard
