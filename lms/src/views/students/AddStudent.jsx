import React from 'react'
import { useDispatch } from 'react-redux'
import StudentForm from 'src/components/students/StudentForm'
import { addStudent } from '../../redux/actions/studentActions'

const AddStudent = () => {
  const dispatch = useDispatch()
  const handleSubmit = (data) => {
    dispatch(addStudent(data))
  }
  return (
    <div>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddStudent
