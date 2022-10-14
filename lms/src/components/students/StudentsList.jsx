import { cilArrowRight, cilDelete, cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
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
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllStudents } from 'src/redux/actions/studentActions'
import { deleteStudentById } from '../../redux/actions/studentActions'

const StudentsList = () => {
  const students = useSelector((state) => {
    return state.students
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllStudents())
  }, [])

  const handleOnDelete = (id) => {
    dispatch(deleteStudentById(id))
  }

  return (
    <>
      <CRow className="student-list-table">
        <CCol xs={12}>
          <CCard>
            <CCardBody>
              <CTable caption="top">
                <CTableCaption>Student List</CTableCaption>
                <CTableHead>
                  <CTableRow className="text-capitalize fz-">
                    <CTableHeaderCell scope="col">Student No.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Academic Year</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Sem</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {students.map((student, idx) => (
                    <CTableRow key={idx} className="text-capitalize">
                      <CTableDataCell>{student.studentNo}</CTableDataCell>
                      <CTableDataCell>{student.firstName}</CTableDataCell>
                      <CTableDataCell>{student.lastName}</CTableDataCell>
                      <CTableDataCell>{student.academicYear}</CTableDataCell>
                      <CTableDataCell>{student.sem}</CTableDataCell>
                      <CTableDataCell>
                        {student.status === 'regular' ? (
                          <span className="badge bg-info">Regular</span>
                        ) : (
                          <mark className="badge bg-warning">Irregular</mark>
                        )}
                      </CTableDataCell>
                      <CTableDataCell>
                        <CTooltip content="View Details" placement="top">
                          <Link
                            to={`/student/details/${student.student_id}`}
                            color="info"
                            className="me-2 btn btn-info"
                          >
                            <CIcon icon={cilArrowRight} />
                          </Link>
                        </CTooltip>
                        <CTooltip content="delete" placement="top">
                          <CButton
                            onClick={() => handleOnDelete(student.student_id)}
                            color="danger"
                            className="me-2"
                          >
                            <CIcon icon={cilTrash} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="update" placement="top">
                          <Link
                            to={`/student/edit/${student.student_id}`}
                            className="btn btn-success"
                          >
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

export default StudentsList
