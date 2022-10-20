import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getStudentById } from '../../services/studentService'
import { IoIosArrowBack } from 'react-icons/io'
import 'src/scss/_admin.scss'
import { Btn } from 'src/styles/Btn.styles.'
import { CContainer } from '@coreui/react-pro'

const StudentDetails = () => {
  const param = useParams()
  const [student, setstudent] = useState({})
  useEffect(() => {
    getStudentById(+param.id).then((res) => {
      if (res.data.status === 1) {
        setstudent({ ...res.data.object })
      }
    })
  }, [param])
  if (student.student_id) {
    return (
      <>
        <CCard className="mb-4 notrounded">
          <CCardHeader className="info-header">STUDENT PERSONAL INFORMATION</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={4} xs={6} className="mb-3">
                <h6>Student no</h6>
                <div>{student.studentNo}</div>
              </CCol>
              <CCol md={4} xs={6} className="mb-3">
                <h6>First Name</h6>
                {student.firstName}
              </CCol>
              <CCol md={4} xs={6} className="mb-3">
                <h6>Middle Name</h6>
                {student.middleName}
              </CCol>
              <CCol md={4} xs={6} className="mb-3">
                <h6>Last Name</h6>
                {student.lastName}
              </CCol>
              <CCol md={4} xs={6} className="mb-3">
                <h6>Last Name</h6>
                {student.lastName}
              </CCol>
              <CCol md={4} xs={6} className="mb-3">
                <h6>Birth Date</h6>
                {student.birthDate}
              </CCol>
              <CCol md={4} xs={6} className="mb-3">
                <h6>Mobile Number</h6>
                {student.mobileNumber}
              </CCol>
              <CCol md={4} xs={6} className="mb-3">
                <h6>Adress</h6>
                {student.address}
              </CCol>
              <CRow>
                <div className="sub2 py-2">EMERGENCY CONTACT INFORMATION</div>
                <CCol md={6} xs={6} className="mb-3">
                  <h6>Contact Person</h6>
                  {student.emergencyContactPerson}
                </CCol>
                <CCol md={6} xs={6} className="mb-3">
                  <h6>Contact Number</h6>
                  {student.emergencyContactNumber}
                </CCol>
              </CRow>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard className="mb-4 notrounded">
          <CCardHeader className="info-header">ACADEMIC INFORMATION</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={6} xs={12} className="mb-3">
                <h6>Department</h6>
                {student.department ? student.department.departmentName : 'Empty'}
              </CCol>
              <CCol md={6} xs={12} className="mb-3">
                <h6>Course</h6>
                {student.course ? student.course.courseTitle : 'Empty'}
              </CCol>
              <CCol md={6} xs={12} className="mb-3">
                <h6>Academic Status</h6>
                {student.status}
              </CCol>

              <CCol md={6} xs={12} className="mb-3">
                <h6>Active Status</h6>
                {student.active_deaction ? (
                  <span className="badge bg-info">active</span>
                ) : (
                  <span className="badge bg-warning">Inactive</span>
                )}
              </CCol>
              <CCol md={6} xs={12} className="mb-3">
                <h6>Enrolled Sem </h6>
                {student.sem}
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard className="notrounded">
          <CCardHeader className="info-header">SUBJECTS</CCardHeader>
          <CCardBody>
            <CRow>
              {student.subject.map((sub, idx) => (
                <CCard key={idx} className="mb-4">
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12} className="mb-3 text-capitalize">
                        <h6>Subject Title</h6>
                        {sub.subjectTitle}
                      </CCol>
                      <CCol md={6} xs={12} className="mb-3">
                        <h6>Subject Code</h6>
                        {sub.subjectCode}
                      </CCol>

                      <CCol md={6} xs={12} className="mb-3">
                        <h6>Units</h6>
                        {sub.units}
                      </CCol>

                      <CCol md={6} xs={12} className="mb-3">
                        <h6>Prerequisites</h6>
                        {sub.prerequisites}
                      </CCol>
                      {/* <CCol md={6} xs={12} className="mb-3">
                        <h6>Professor</h6>
                        {sub.professor.professorName}
                      </CCol> */}
                    </CRow>
                  </CCardBody>
                </CCard>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
        <CRow>
          <CContainer className="py-4">
            <Btn big="true" to="/students">
              <IoIosArrowBack className="a-icon" /> BACK
            </Btn>
          </CContainer>
        </CRow>
      </>
    )
  }
}

export default StudentDetails
