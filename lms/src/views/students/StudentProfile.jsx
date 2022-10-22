import React from 'react'
import StudentProfileForm from 'src/components/Student-Module/StudentProfileForm'
import * as userInfoService from 'src/services/userInfo'

const StudentProfile = () => {
  const student = userInfoService.getUserInfo().object
  const type = student.type
  return (
    <div>
      <StudentProfileForm studentInfo={student} type={type} />
    </div>
  )
}

export default StudentProfile
