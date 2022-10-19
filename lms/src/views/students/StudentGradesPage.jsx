import React from 'react'
import StudentGrades from 'src/components/Student-Module/StudentGrades'
import * as studentGradesService from 'src/services/gradesService'
import { getUserInfo } from 'src/services/userInfo'
import { useState, useEffect } from 'react'

const StudentGradesPage = () => {
  const [grades, setGrades] = useState([])
  const userInfo = getUserInfo().object

  useEffect(() => {
    getGrades(userInfo.student_id)
  }, [])
  const getGrades = (id) => {
    studentGradesService.getGradesbyId(id).then((res) => {
      if (res && res.data) {
        setGrades(res.data.object)
      }
    })
  }
  if (grades.length !== 0) {
    return (
      <div>
        <StudentGrades grades={grades} userInfo={userInfo} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>No Grades Yet</h1>
      </div>
    )
  }
}

export default StudentGradesPage
