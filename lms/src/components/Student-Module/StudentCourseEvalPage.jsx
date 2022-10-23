import React, { useState } from 'react'
import StudentCourseEval from 'src/views/students/StudentCourseEval'
import { getCourseEvaluation } from 'src/services/subjectService'

const StudentCourseEvalPage = () => {
  const [courses, setCourses] = useState([])

  const getCourses = (id, sem, year) => {
    getCourseEvaluation(id, sem.year)
  }
  return (
    <div>
      <StudentCourseEval />
    </div>
  )
}

export default StudentCourseEvalPage
