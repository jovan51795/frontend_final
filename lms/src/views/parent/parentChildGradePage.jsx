import React, { useState, useEffect }  from 'react'
import StudentGrades from 'src/components/Student-Module/StudentGrades'
import * as studentGradesService from 'src/services/gradesService'
import { getUserInfo } from 'src/services/userInfo'

const ParentChildGradePage = () => {
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
        <h1 className="text-center m-5">No Grades Yet</h1>
      </div>
    )
  }
}
export default ParentChildGradePage
