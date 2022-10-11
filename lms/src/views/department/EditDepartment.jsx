import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import DepartmentForm from 'src/components/department/DepartmentForm'
import { getDepartmentById } from '../../services/departmentService'
import { updateDepartment } from '../../redux/actions/departmentActions'

const EditDepartment = () => {
  const dispatch = useDispatch()
  const [department, setdepartment] = useState({})
  const navigate = useNavigate()
  const param = useParams()
  useEffect(() => {
    getDepartmentById(+param.id).then((res) => {
      if (res.data && res.data.status === 1) {
        setdepartment({ ...res.data.object })
      } else if (res.data && res.data.status === 0) {
        alert('An unexpected error occurred')
      }
    })
  }, [param])

  const handleOnSubmit = (data) => {
    dispatch(updateDepartment(data))
    navigate('/departments')
  }
  if (department.departmentId) {
    return (
      <div>
        <DepartmentForm initialValue={department} onSubmit={handleOnSubmit} />
      </div>
    )
  }
}

export default EditDepartment
