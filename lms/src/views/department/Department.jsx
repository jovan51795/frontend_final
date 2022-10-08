import { CButton, CCol, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DepartmentWidgets from 'src/components/department/DepartmentWidgets'
import { getAll } from '../../redux/actions/departmentActions'

const Department = () => {
  const dispatch = useDispatch()
  const departments = useSelector((state) => {
    return state.department.object
  })
  useEffect(() => {
    dispatch(getAll())
    console.log('the effect')
  }, [])
  return (
    <div>
      <div className="d-flex justify-content-end">
        <Link to="/department/add" className="btn btn-success">
          Add Department
        </Link>
      </div>
      <CRow>
        {departments?.map((dep) => (
          <CCol sm={6} lg={3} key={dep.departmentId}>
            <DepartmentWidgets dep={dep} className="bg-info" />
          </CCol>
        ))}
      </CRow>
    </div>
  )
}

export default Department
