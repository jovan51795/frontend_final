import { CCard, CCardHeader, CCol, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DepartmentWidgets from 'src/components/department/DepartmentWidgets'
import { getAll } from '../../services/departmentService'
import { deleteDepartment } from '../../redux/actions/departmentActions'
import { useDispatch, useSelector } from 'react-redux'
import { Btn } from 'src/styles/Btn.styles.'
import { MdAddBusiness } from 'react-icons/md'
import 'src/scss/_custom.scss'

const Department = () => {
  const dispatch = useDispatch()
  const [colors, setColors] = useState(['primary', 'secondary', 'info', 'success'])
  var colorCounter = 0
  const [departments, setDepartments] = useState([])
  useEffect(() => {
    getAllDepatment()
  }, [])

  const handleColorGenerator = () => {
    colorCounter++
    if (colorCounter > colors.length) {
      colorCounter = 1
    }
    return colors[colorCounter - 1]
  }

  const getAllDepatment = () => {
    getAll().then((res) => {
      if (res.data && res.data.status === 1) {
        setDepartments(res.data.object)
      }
    })
  }

  useSelector((state) => {
    if (state.department.status === 1) {
      getAllDepatment()
    }
  })

  const handleDeleteDepartment = (id) => {
    dispatch(deleteDepartment(id))
  }
  return (
    <div>
      <div className="heading">DEPARTMENTS</div>
      <div className="container">
        <div className="d-flex justify-content-end align-items-center">
          <Btn big="true" to="/department/add" className="my-3">
            <MdAddBusiness /> Add Department
          </Btn>
        </div>
      </div>
      <hr className="mb-5 m-0" />
      <CRow>
        {departments.map((dep) => (
          <CCol sm={6} lg={6} key={dep.departmentId}>
            <DepartmentWidgets
              dep={dep}
              color={handleColorGenerator()}
              className="bg-info"
              onDelete={handleDeleteDepartment}
            />
          </CCol>
        ))}
      </CRow>
    </div>
  )
}

export default Department
