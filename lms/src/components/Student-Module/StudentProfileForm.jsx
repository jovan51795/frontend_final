import { CCard, CCardBody, CRow, CCol, CImage } from '@coreui/react'
import React from 'react'

const StudentProfileForm = () => {
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
              <h3>John Doe</h3>
              <p className="mb-1">BSIT</p>
              <p className="text-muted font-size-sm">College of Computer Studies</p>
              {/* <button className="btn btn-primary">Follow</button>
              <button className="btn btn-outline-primary">Message</button> */}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} sm={6} lg={8}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Username:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                johndoe
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">First Name:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                John
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Last Name:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                Doe
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Date of Birth:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                December 25, 2000
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={3}>
                <h6 className="mb-0">Address:</h6>
              </CCol>
              <CCol sm={9} className="text-secondary">
                Sampaloc, Manila
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default StudentProfileForm
