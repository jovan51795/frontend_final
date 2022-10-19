import React from 'react'
import StudentSubjects from 'src/components/Student-Module/StudentSubjects'
import { getUserInfo } from 'src/services/userInfo'

const StudentSubjectsPage = () => {
  const subjects = getUserInfo().object.subject

  return (
    <div>
      <StudentSubjects subjects={subjects} />
    </div>
  )
}

export default StudentSubjectsPage
