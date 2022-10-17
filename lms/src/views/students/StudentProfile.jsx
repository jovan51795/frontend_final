import React from 'react'
import StudentProfileForm from 'src/components/Student-Module/StudentProfileForm'
import * as userInfoService from 'src/services/userInfo'

const StudentProfile = () => {
  const student = userInfoService.getUserInfo().object
  return (
    <div>
      <StudentProfileForm studentInfo={student} />
    </div>
  )
}

export default StudentProfile
