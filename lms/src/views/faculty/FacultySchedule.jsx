import React from 'react'
import StudentDashboardCalendar from 'src/components/Student-Module/StudentDashboardCalendar'
import { useState, useEffect } from 'react'
import * as subjecService from 'src/services/subjectService'
import { getUserInfo } from 'src/services/userInfo'

const FacultySchedule = () => {
  const [schedules, setSchedules] = useState([])
  const userInfo = getUserInfo().object
  useEffect(() => {
    getSchedules(userInfo.professor_id)
  }, [])

  const getSchedules = (id) => {
    subjecService.getFacultyScheduleById(id).then((res) => {
      if (res.data) {
        setSchedules(res.data.object)
      }
    })
  }
  return (
    <div>
      <StudentDashboardCalendar schedules={schedules} />
    </div>
  )
}

export default FacultySchedule
