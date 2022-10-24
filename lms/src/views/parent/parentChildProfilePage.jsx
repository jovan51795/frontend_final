import React from 'react'
import StudentProfileForm from 'src/components/Student-Module/StudentProfileForm'
import { getUserInfo } from 'src/services/userInfo'


const ParentChildProfilePage = () => {
  const userInfo = getUserInfo().object.student;
  const userInfoType = getUserInfo().object.type;
  return (<><div>
    <StudentProfileForm studentInfo={userInfo} type={userInfoType}/></div></>)
}

export default ParentChildProfilePage
