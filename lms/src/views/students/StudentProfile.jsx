import React from 'react'
import StudentProfileForm from 'src/components/Student-Module/StudentProfileForm'

// import { studentdata } from 'src/components/Student-Module/studentdata'
// import { useParams } from 'react-router-dom'

const StudentProfile = () => {
  // const params = useParams()
  // const student = studentdata.find((student) => student.username === params.username)

  return (
    <div>
      <StudentProfileForm />
    </div>
  )
}

export default StudentProfile
