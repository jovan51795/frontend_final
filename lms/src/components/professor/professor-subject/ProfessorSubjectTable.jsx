import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CTooltip,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowThickRight, cilCalendar, cilPen } from '@coreui/icons'
import { update } from 'lodash'

const ProfessorSubjectTable = ({ subjectList, params }) => {
  return (
    <>
      <CCard>
        <CCardHeader>
          <strong>Subjects Table</strong>
        </CCardHeader>
        <CCardBody style={{ overflow: 'scroll' }}>
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
              {subjectList.map((sub) => (
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
                    <CTooltip content="Schedule" placement="top">
                      <Link
                        className="btn btn-warning"
                        to={`/subject/${sub.subject_id}/professor/${params}`}
                      >
                        <CIcon icon={cilCalendar} />
                      </Link>
                    </CTooltip>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default ProfessorSubjectTable
