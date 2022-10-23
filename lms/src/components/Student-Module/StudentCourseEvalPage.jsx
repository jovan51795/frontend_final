import React, { useEffect, useState } from 'react'
import StudentCourseEval from 'src/views/students/StudentCourseEval'
import { getCourseEvaluation } from 'src/services/subjectService'

const StudentCourseEvalPage = () => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    getCourses(1, '1st sem', '2022-2023')
  }, [])

  const getCourses = (id, sem, year) => {
    getCourseEvaluation(id, sem.year).then((res) => {
      if (res && res.data) {
        setCourses(res.data.object)
      }
    })
  }
  console.log(courses)
  return (
    <div>
      <StudentCourseEval />
    </div>
  )
}

export default StudentCourseEvalPage
