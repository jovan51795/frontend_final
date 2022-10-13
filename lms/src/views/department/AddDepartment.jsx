import React from 'react'
import { useDispatch } from 'react-redux'
import DepartmentForm from 'src/components/department/DepartmentForm'
import { addDepartment } from '../../redux/actions/departmentActions'

const AddDepartment = () => {
  const dispatch = useDispatch()

  const handleSubmit = (data) => {
    dispatch(addDepartment(data))
  }
  return (
    <div>
      <DepartmentForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddDepartment
