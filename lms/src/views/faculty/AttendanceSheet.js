import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStudentAttendance, setStudentAttendance } from 'src/services/professorService'
import { toast } from 'react-toastify'
import AttendanceCard from 'src/components/faculty/AttendanceCard'

const AttendanceSheet = () => {
  const { subject_id, professor_id, student_id } = useParams()
  const [student, setStudent] = useState([])

  useEffect(() => {
    getStudentAttendance(+subject_id, +professor_id, +student_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setStudent(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [subject_id, professor_id, student_id])

  const handleSubmit = (attendance) => {
    console.log(attendance)
    console.log("sadas")
    setStudentAttendance(+student_id, +subject_id, +professor_id, attendance).then((res) => {
      if (res && res.data && res.data.status === 1) {
        toast.success(res.data.message)
        console.log(res.data)
      } else if (res && res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }

  if (student.length !== 0) {
    return <AttendanceCard student={student} onSubmit={handleSubmit} />
  }
}
export default AttendanceSheet
