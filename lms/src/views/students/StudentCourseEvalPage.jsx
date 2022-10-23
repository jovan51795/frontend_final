import React from 'react'
import StudentCourseEval from 'src/components/Student-Module/StudentCourseEval'

const StudentCourseEvalPage = () => {
  const courses = [
    {
      level: 'Freshman',
      sems: [
        {
          id: '1st Semester',
        },
        {
          id: '2nd Semester',
        },
        {
          id: '3rd Semester',
        },
      ],
    },
    {
      level: 'Sophomore',
      sems: [
        {
          id: '1st Semester',
        },
        {
          id: '2nd Semester',
        },
        {
          id: '3rd Semester',
        },
      ],
    },
    {
      level: 'Junior',
      sems: [
        {
          id: '1st Semester',
        },
        {
          id: '2nd Semester',
        },
        {
          id: '3rd Semester',
        },
      ],
    },
    {
      level: 'Senior',
      sems: [
        {
          id: '1st Semester',
        },
        {
          id: '2nd Semester',
        },
        {
          id: '3rd Semester',
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
