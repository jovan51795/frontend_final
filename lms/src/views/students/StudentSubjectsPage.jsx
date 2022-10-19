import React from 'react'
import StudentSubjects from 'src/components/Student-Module/StudentSubjects'
import { getUserInfo } from 'src/services/userInfo'

const StudentSubjectsPage = () => {
  const subjects = getUserInfo().object.subject

  if (subjects) {
    return (
      <div>
        <StudentSubjects subjects={subjects} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>No Subjects Yet</h1>
      </div>
    )
  }
}

export default StudentSubjectsPage
