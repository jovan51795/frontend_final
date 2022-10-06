import {
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
} from '@coreui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStudents } from 'src/redux/actions/studentActions'

const StudentsListTable = () => {
  const students = useSelector((state) => state.students)
  console.log(students)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllStudents())
  }, [])

  return (
    <>
      <CRow className="student-list-table">
        <CCol xs={12}>
          <CCard>
            <CCardHeader></CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Student No.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Middle Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Academic Year</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Sem</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {students.map((student, idx) => (
                    <CTableRow key={idx}>
                      <CTableDataCell>{student.student_no}</CTableDataCell>
                      <CTableDataCell>{student.firstName}</CTableDataCell>
                      <CTableDataCell>{student.middleName}</CTableDataCell>
                      <CTableDataCell>{student.lastName}</CTableDataCell>
                      <CTableDataCell>{student.academicYear}</CTableDataCell>
                      <CTableDataCell>{student.sem}</CTableDataCell>
                      <CTableDataCell>
                        {student.active_deactive ? (
                          <span className="badge bg-info">active</span>
                        ) : (
                          <mark className="badge bg-warning">inActive</mark>
                        )}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {students.map((student, idx) => (
        <CCard key={idx} className="student-list-card mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={6}>
                <CCardTitle>Student No.</CCardTitle>
                <CCardText className="mb-4">{student.student_no}</CCardText>
              </CCol>
              <CCol sm={6}>
                <CCardTitle>First Name</CCardTitle>
                <CCardText className="mb-4">{student.firstName}</CCardText>
              </CCol>

              <CCol sm={6}>
                <CCardTitle>Middle Name</CCardTitle>
                <CCardText className="mb-4">{student.middleName}</CCardText>
              </CCol>

              <CCol sm={6}>
                <CCardTitle>Last Name</CCardTitle>
                <CCardText className="mb-4">{student.lastName}</CCardText>
              </CCol>

              <CCol sm={6}>
                <CCardTitle>Academic Year</CCardTitle>
                <CCardText className="mb-4">{student.academicYear}</CCardText>
              </CCol>

              <CCol sm={6}>
                <CCardTitle>Sem</CCardTitle>
                <CCardText className="mb-4"> {student.sem}</CCardText>
              </CCol>
              <CCol sm={6}>
                <CCardTitle>Status</CCardTitle>
                <CCardText className="mb-4">
                  {student.active_deactive ? (
                    <span className="badge bg-info">active</span>
                  ) : (
                    <mark className="badge bg-warning">inActive</mark>
                  )}
                </CCardText>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      ))}
    </>
  )
}

export default StudentsListTable
