import React from 'react'
import Calendar from 'src/components/calendar/Calendar'
import DashboardProfile from 'src/components/faculty/DashboardProfile'
import Bulletin from 'src/components/info-section/Bulletin'
import 'src/scss/dbfacultyprofile.scss'
import PassingBarChart from '../charts/PassingBarChart'
import PassingLineChart from '../charts/PassingLineChart'

const FacultyDashboard = () => {
  return (
    <div>
      <DashboardProfile />
      <hr />
      <div className="row no-gutters mt-4">
        <div className=" col-md-6 col-lg-6 p-2">
          <PassingBarChart />
        </div>
        <div className=" col-md-6 col-lg-6 p-2">
          <PassingLineChart />
        </div>
      </div>
      <div className="row no-gutters left">
        <div className="col-md-8 col-lg-8 mt-4">
          <Bulletin />
        </div>
        <div className="col-md-4 col-lg-4 mt-4">
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default FacultyDashboard
