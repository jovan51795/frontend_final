import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUserInfo } from 'src/services/userInfo'
import { getStudentByProf } from 'src/services/professorService'
import AttenandanceLog from 'src/components/faculty/AttenandanceLog'

const AttendanceMonitoring = () => {
  const { student_id } = useParams()
  const professor_id = getUserInfo().object.professor_id
  const [profStudents, setProfStudents] = useState()

  useEffect(() => {
    getStudentByProf(professor_id, +student_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setProfStudents(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [student_id, professor_id])

  return <AttenandanceLog />
}

export default AttendanceMonitoring
