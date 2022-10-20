import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getStudentGrade, setStudentGrade } from 'src/services/professorService'
import 'src/scss/_custom.scss'
import ClassCard from 'src/components/faculty/ClassCard'

const GradingSheet = () => {
  const { subject_id, professor_id, student_id } = useParams()
  const navigate = useNavigate()
  const [student, setStudent] = useState([])

  useEffect(() => {
    getStudentGrade(+subject_id, +professor_id, +student_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setStudent(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [subject_id, professor_id, student_id])

  const handleSubmit = (grade) => {
    console.log('submitting')
    setStudentGrade(+student_id, +subject_id, +professor_id, grade).then((res) => {
      if (res && res.data && res.data.status === 1) {
        toast.success(res.data.message)
        navigate('/faculty/classes')
      } else if (res && res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }

  if (student.length !== 0) {
    return <ClassCard student={student} onSubmit={handleSubmit} />
  }
}

export default GradingSheet
