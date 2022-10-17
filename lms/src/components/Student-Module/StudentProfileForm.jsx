import { CCard, CCardBody, CRow, CCol, CImage } from '@coreui/react'
import React from 'react'

const StudentProfileForm = ({ studentInfo }) => {
  const date = new Date(studentInfo.birthDate)
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][date.getMonth()]
  const birthDate = month + ' ' + date.getDate() + ', ' + date.getFullYear()
  console.log(studentInfo)
  return (
    <CRow>
      <CCol xs={12} sm={6} lg={4}>
        <CCard className="mb-4 d-flex flex-column align-items-center text-center">
          <CCardBody>
            <CImage
              src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
              alt="profile pic"
              className="rounded-circle"
              style={{ width: '150px' }}
            />
            <div>
              <h3>
                {studentInfo.firstName} {studentInfo.lastName}
              </h3>
              <p className="mb-1">{}</p>
              <p className="text-muted font-size-sm">{studentInfo.department}/</p>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} sm={6} lg={8}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Student Number:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                {studentInfo.studentNo}
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">First Name:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                {studentInfo.firstName}
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Last Name:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                {studentInfo.lastName}
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Date of Birth:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                {birthDate}
              </CCol>
            </CRow>{' '}
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Mobile Number:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                {studentInfo.mobileNumber}
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Address:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                {studentInfo.address}
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Contact Person:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                {studentInfo.emergencyContactPerson}
              </CCol>
            </CRow>{' '}
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Contact Number:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                {studentInfo.emergencyContactNumber}
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default StudentProfileForm
