import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell,
  CTableBody,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const Bulletin = () => {
  return (
    <CCard>
      <CCardHeader className="bg-blue text-light fs-6 fw-bold">UNIVERSITY BULLETIN</CCardHeader>
      <CCardBody>
        <blockquote className="blockquote mb-0">
          <p className="m-0">NEW STUDENT ENROLLMENT PROCEDURE</p>
          <p>
            <Link to="/admission/enrollment-procedure">Enrollment Procedure for SY 2022-2023</Link>
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">ABC University</cite> Management
          </footer>
        </blockquote>
        <hr />
        <CRow className="px-1 fs-5 ">SCHEDULE OF ENROLMENT OF QUALIFIED APPLICANTS</CRow>
        <CRow>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Course</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">October 24</CTableHeaderCell>
                <CTableDataCell>BSIT(Bachelor of Science in Information Technology)</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">October 25</CTableHeaderCell>
                <CTableDataCell>BSCompSci(Bachelor of Science in Computer Science)</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">October 26</CTableHeaderCell>
                <CTableDataCell colSpan="2">
                  BSCoE(Bachelor of Science in Computer Engineering)
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">October 27</CTableHeaderCell>
                <CTableDataCell colSpan="2">
                  BACOMM(Bachelor of Arts in Communication)
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default Bulletin
