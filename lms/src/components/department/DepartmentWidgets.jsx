import React, { useState } from 'react'
import {
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowCircleRight,
  cilEyedropper,
  cilOptions,
  cilPencil,
  cilTrash,
  cilWarning,
} from '@coreui/icons'
import { Link, useNavigate } from 'react-router-dom'

const DepartmentWidgets = ({ dep, color, onDelete }) => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const handleEditDep = () => {
    navigate(`/department/edit/${dep.departmentId}`)
  }

  return (
    <CWidgetStatsA
      className="mb-4 pb-3"
      color={color}
      value={
        <>
          <div className="fs-5 pb-1">{dep.departmentName}</div>
          {dep.course.length} &nbsp;&nbsp;&nbsp;
          <span className="fs-4 mb-3 fw-normal">Course/s Available</span>
        </>
      }
      action={
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret={false} className="p-0">
            <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem onClick={handleEditDep}>
              <CIcon icon={cilPencil} className="me-4" style={{ color: '#003169' }} />
              <span className="fw-bold" style={{ color: '#003169' }}>
                View / Edit
              </span>
            </CDropdownItem>

            <CDropdownItem onClick={() => setVisible(!visible)}>
              <CIcon icon={cilTrash} className="me-4" style={{ color: '#003169' }} />
              <span className="fw-bold" style={{ color: '#003169' }}>
                Delete
              </span>
              <CModal visible={visible}>
                <CModalHeader className="bg-warning">
                  <CModalTitle>
                    Warning <CIcon icon={cilWarning} size="xl" />
                  </CModalTitle>
                </CModalHeader>
                <CModalBody>This data will permanently deleted</CModalBody>
                <CModalFooter>
                  <CButton color="success" onClick={() => onDelete(dep.departmentId)}>
                    Continue
                  </CButton>
                  <CButton color="secondary">Cancel</CButton>
                </CModalFooter>
              </CModal>
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      }
    />
  )
}

export default DepartmentWidgets
