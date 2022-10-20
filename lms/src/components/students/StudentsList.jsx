import { cilArrowRight, cilDelete, cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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
import { FiFileText, FiArchive } from 'react-icons/fi'
import { RiEdit2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { getAllStudents } from 'src/redux/actions/studentActions'
import { deleteStudentById } from '../../redux/actions/studentActions'
import 'src/scss/_admin.scss'

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
                <CTableCaption className="text-center txt-style">
                  STUDENTS MASTER LIST
                </CTableCaption>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" className="col-title">
                      STUDENT NO.
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="col-title">
                      FIRST NAME
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="col-title">
                      LAST NAME
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="col-title">
                      ACADEMIC YEAR
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="col-title">
                      SEMESTER
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="col-title">
                      STATUS
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="col-title">
                      ACTIONS
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {students.map((student, idx) => (
                    <CTableRow key={idx} className="text-center">
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
                            className="mx-1 btn btn-view"
                          >
                            <FiFileText className="nav-icon" />
                          </Link>
                        </CTooltip>
                        <div className="vr"></div>
                        <CTooltip content="delete" placement="top">
                          <CButton
                            onClick={() => handleOnDelete(student.student_id)}
                            className="mx-1 btn-view"
                          >
                            <FiArchive className="nav-icon" />
                          </CButton>
                        </CTooltip>
                        <div className="vr"></div>
                        <CTooltip content="update" placement="top">
                          <Link to={`/student/edit/${student.student_id}`} className="btn btn-view">
                            <RiEdit2Fill className="nav-icon" />
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
                <CCardTitle className="sm-col-title">STUDENT NO.</CCardTitle>
                <CCardText className="mb-4">{student.studentNo}</CCardText>
              </CCol>
              <CCol sm={6}>
                <CCardTitle className="sm-col-title">FIRST NAME</CCardTitle>
                <CCardText className="mb-4">{student.firstName}</CCardText>
              </CCol>

              <CCol sm={6}>
                <CCardTitle className="sm-col-title">MIDDLE NAME</CCardTitle>
                <CCardText className="mb-4">{student.middleName}</CCardText>
              </CCol>

              <CCol sm={6}>
                <CCardTitle className="sm-col-title">LAST NAME</CCardTitle>
                <CCardText className="mb-4">{student.lastName}</CCardText>
              </CCol>

              <CCol sm={6}>
                <CCardTitle className="sm-col-title">ACADEMIC YEAR</CCardTitle>
                <CCardText className="mb-4">{student.academicYear}</CCardText>
              </CCol>

              <CCol sm={6}>
                <CCardTitle className="sm-col-title">SEMESTER</CCardTitle>
                <CCardText className="mb-4"> {student.sem}</CCardText>
              </CCol>
              <CCol sm={6}>
                <CCardTitle className="sm-col-title">STATUS</CCardTitle>
                <CCardText className="mb-4">
                  {student.active_deactive ? (
                    <span className="badge bg-info">ACTIVE</span>
                  ) : (
                    <mark className="badge bg-warning">INACTIVE</mark>
                  )}
                </CCardText>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter className="d-flex justify-content-end ">
            <CTooltip content="View Details" placement="top" className="my-2">
              <Link
                to={`/student/details/${student.student_id}`}
                color="info"
                className="mx-1 btn sm-btn-view"
              >
                <FiFileText className="nav-icon" />
              </Link>
            </CTooltip>
            <div className="vr"></div>
            <CTooltip content="delete" placement="top">
              <CButton
                onClick={() => handleOnDelete(student.student_id)}
                className="mx-1 sm-btn-view"
              >
                <FiArchive className="nav-icon" />
              </CButton>
            </CTooltip>
            <div className="vr"></div>
            <CTooltip content="update" placement="top">
              <Link to={`/student/edit/${student.student_id}`} className="btn sm-btn-view">
                <RiEdit2Fill className="nav-icon" />
              </Link>
            </CTooltip>
          </CCardFooter>
        </CCard>
      ))}
    </>
  )
}

export default StudentsList
