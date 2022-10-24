import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CTableBody,
  CButton,
  CTableCaption,
} from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../loading/Loading'


const StudentSubjects = ({ subjects }) => {
  let totalUnits = 0
  subjects.forEach((subject) => {
    totalUnits += subject.units
  })
  // console.log(subjects)

  const isProfessorNull = (prof) => {
    if (prof != null) {
      return prof.firstName + ' ' + prof.lastName
    } else {
      return 'No professor assigned'
    }
  }
if(subjects.length > 0){  return (
    <div>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Subject List</strong>
        </CCardHeader>
        <CCardBody style={{ oveflow: 'scroll', overflow: 'auto', height: '1000px' }}>
          <CTable hover align="middle">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">Professor</CTableHeaderCell>
                <CTableHeaderCell scope="col">Units</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {subjects.map((subject) => (
                <CTableRow key={subject.subject_id}>
                  <CTableDataCell>{subject.subjectCode}</CTableDataCell>
                  <CTableDataCell>{subject.subjectTitle}</CTableDataCell>
                  <CTableDataCell>{isProfessorNull(subject.professor)}</CTableDataCell>
                  <CTableDataCell>{subject.units}</CTableDataCell>
                </CTableRow>
              ))}

              <CTableRow>
                <CTableDataCell colSpan={3} style={{ textAlign: 'right' }}>
                  <b>Total Units:</b>
                </CTableDataCell>
                <CTableDataCell>{totalUnits}</CTableDataCell>
              </CTableRow>
            </CTableBody>

            <div className="mt-4">
              <CButton className="btn-primary">
                <Link to="/student/enroll" style={{ textDecoration: 'none' }}>
                  <span style={{ color: 'white' }}>Enroll Subjects</span>
                </Link>
              </CButton>
            </div>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}else{
<  Loading/>
}
}
export default StudentSubjects
