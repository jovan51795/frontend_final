import React, { useEffect, useState } from 'react'
import StudentAttendance from 'src/components/Student-Module/StudentAttendance'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { getStudentAttendanceById } from 'src/services/attendanceService'
import { getUserInfo } from 'src/services/userInfo'

const ParentChildAttendance = () => {
  const [data, setData] = useState([])
  const userInfo = getUserInfo().object

  useEffect(() => {
    getAttendance(userInfo.student_id)
  }, [])

  const getAttendance = (id) => {
    getStudentAttendanceById(id).then((res) => {
      if (res && res.data) {
        setData(res.data.object)
      }
    })
  }

  return (
    <CCard>
      <CCardHeader>
        <strong>Attendance Table:</strong>
      </CCardHeader>
      <CCardBody style={{ overflow: 'scroll', width: '100%', overflow: 'auto' }}>
        <StudentAttendance data={data} />
      </CCardBody>
    </CCard>
  )
}

export default ParentChildAttendance
