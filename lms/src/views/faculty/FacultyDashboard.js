import React from 'react'
import Calendar from 'src/components/calendar/Calendar'

import Bulletin from 'src/components/info-section/Bulletin'
import 'src/scss/dbfacultyprofile.scss'
import PassingBarChart from '../charts/PassingBarChart'
import { getUserInfo } from 'src/services/userInfo'

const FacultyDashboard = () => {
  const userInfo = getUserInfo().object

  return (
    <div>
      <div className="comptitle">Welcome {userInfo.firstName} {userInfo.lastName}</div>
      <div className="row no-gutters mt-4">
        <div className=" col-md-12 col-lg-12 p-2">
          <PassingBarChart />
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
