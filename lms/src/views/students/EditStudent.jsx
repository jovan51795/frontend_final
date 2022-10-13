import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StudentForm from 'src/components/students/StudentForm'
import { getStudentById } from '../../services/studentService'
import { updateStudentById } from '../../redux/actions/studentActions'
import { useDispatch } from 'react-redux'

const EditStudent = () => {
  const param = useParams()
  const [student, setstudent] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    getStudentById(+param.id).then((res) => {
      if (res.data.status === 1) {
        setstudent({ ...res.data.object })
      }
    })
  }, [])

  const handleSubmit = (data) => {
    dispatch(updateStudentById(data))
  }
  if (student.student_id) {
    return (
      <div>
        <StudentForm initialValue={student} onSubmit={handleSubmit} />
      </div>
    )
  }
}

export default EditStudent
