import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowThickRight, cilPencil, cilTrash } from '@coreui/icons'
import { Link } from 'react-router-dom'

const SubjectsList = ({ subjects, onDelete }) => {
  return (
    <>
      <CRow className="student-list-table">
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <strong>Subjects Table</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Prerequisites</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {subjects.map((sub) => (
                    <CTableRow key={sub.subject_id}>
                      <CTableDataCell>{sub.subjectCode} </CTableDataCell>
                      <CTableDataCell>{sub.subjectTitle} </CTableDataCell>
                      <CTableDataCell>{sub.units} </CTableDataCell>
                      <CTableDataCell>{sub.prerequisites}</CTableDataCell>
                      <CTableDataCell>
                        {sub.activeDeactive ? (
                          <span className="badge bg-info">active</span>
                        ) : (
                          <span className="badge bg-warning">deactivated</span>
                        )}
                      </CTableDataCell>
                      <CTableDataCell>
                        <CTooltip content="View Details" placement="top">
                          <Link className="btn btn-info" to={`/subject/details/${sub.subject_id}`}>
                            <CIcon icon={cilArrowThickRight} />
                          </Link>
                        </CTooltip>
                        <CTooltip content="delete" placement="top">
                          <CButton
                            onClick={() => onDelete(sub.subject_id)}
                            color="danger"
                            className="mx-3"
                          >
                            <CIcon icon={cilTrash} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="delete" placement="top">
                          <Link className="btn btn-success" to={`/subject/edit/${sub.subject_id}`}>
                            <CIcon icon={cilPencil} />
                          </Link>
                        </CTooltip>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default SubjectsList
