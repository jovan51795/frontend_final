import React from 'react'
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
  CCard,
  CContainer,
  CCardBody,
} from '@coreui/react'

import { CCardHeader } from '@coreui/react-pro'

const ClassCard = ({ gradeData }) => {
  return (
    <>
      <CCard>
        <CContainer>
          <CCardHeader>CLASS CARD</CCardHeader>
          <CCardHeader>
            <div>
              STUDENT NAME: {gradeData?.student.lastName},&nbsp;{gradeData?.student.firstName}
              &nbsp;{gradeData?.student.middleName}
            </div>
            <div>COURSE: {gradeData?.student.course.courseTitle}</div>
            <div>YEAR: {gradeData?.student.academicYear}</div>
            <div>SEMESTER: {gradeData?.student.sem}</div>
            <div>DATE MODIFIED: {gradeData?.date_modified}</div>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">STUDENT NO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">PRELIMS GRADE</CTableHeaderCell>
                  <CTableHeaderCell scope="col">MIDTERMS GRADE</CTableHeaderCell>
                  <CTableHeaderCell scope="col">FINAL RATING</CTableHeaderCell>
                  <CTableHeaderCell scope="col">REMARKS</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">{gradeData?.student.studentNo}</CTableHeaderCell>
                  <CTableHeaderCell scope="row">{gradeData?.prelimGrade}</CTableHeaderCell>
                  <CTableDataCell>{gradeData?.midtermGrade}</CTableDataCell>
                  <CTableDataCell>{gradeData?.finalGrade}</CTableDataCell>
                  <CTableDataCell>{gradeData?.remarks}</CTableDataCell>
                </CTableRow>
              </CTableBody>
              <CTableHead>
                <CTableRow>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell>STATUS</CTableDataCell>
                  <CTableDataCell>{gradeData?.status}</CTableDataCell>
                </CTableRow>
              </CTableHead>
            </CTable>
          </CCardBody>
        </CContainer>
      </CCard>
    </>
  )
}

export default ClassCard
