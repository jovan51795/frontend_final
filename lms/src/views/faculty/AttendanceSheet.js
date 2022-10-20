import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStudentAttendance } from 'src/services/professorService'
import { toast } from 'react-toastify'
import { CSmartTable } from '@coreui/react-pro'
import { CBadge, CFormCheck, CButton, CCollapse, CCardBody } from '@coreui/react'
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

  if (student.length !== 0) {
    return <AttendanceCard student={student} />
  }
}
export default AttendanceSheet
