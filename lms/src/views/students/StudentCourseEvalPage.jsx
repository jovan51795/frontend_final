import React from 'react'
import StudentCourseEval from 'src/components/Student-Module/StudentCourseEval'

const StudentCourseEvalPage = () => {
  const courses = [
    {
      level: 'Freshman',
      sems: [
        {
          id: '1st Semester',
          subjects: [],
        },
        {
          id: '2nd Semester',
          subjects: [],
        },
        {
          id: '3rd Semester',
          subjects: [],
        },
      ],
    },
    {
      level: 'Sophomore',
      sems: [
        {
          id: '1st Semester',
          subjects: [],
        },
        {
          id: '2nd Semester',
          subjects: [],
        },
        {
          id: '3rd Semester',
          subjects: [],
        },
      ],
    },
  ]

  return (
    <div>
      <StudentCourseEval courses={courses} />
    </div>
  )
}

export default StudentCourseEvalPage
