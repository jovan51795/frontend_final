import { CButton } from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import DepartmentWidgets from 'src/components/department/DepartmentWidgets'

const Department = () => {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <Link to="/department/add" className="btn btn-success">
          Add Department
        </Link>
      </div>
      <DepartmentWidgets />
    </div>
  )
}

export default Department
