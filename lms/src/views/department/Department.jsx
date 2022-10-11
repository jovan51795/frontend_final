import { CCol, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DepartmentWidgets from 'src/components/department/DepartmentWidgets'
import { getAll } from '../../services/departmentService'

const Department = () => {
  const [departments, setDepartments] = useState([])
  useEffect(() => {
    getAll().then((res) => {
      if (res.data && res.data.status === 1) {
        setDepartments(res.data.object)
      }
    })
  }, [])
  return (
    <div>
      <div className="d-flex justify-content-end">
        <Link to="/department/add" className="btn btn-success">
          Add Department
        </Link>
      </div>
      <CRow>
        {departments.map((dep) => (
          <CCol sm={6} lg={3} key={dep.departmentId}>
            <DepartmentWidgets dep={dep} className="bg-info" />
          </CCol>
        ))}
      </CRow>
    </div>
  )
}

export default Department
