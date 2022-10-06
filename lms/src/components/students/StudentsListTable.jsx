import {
  CCard,
  CCardBody,
  CCardHeader,
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
    <CRow>
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
  )
}

export default StudentsListTable
