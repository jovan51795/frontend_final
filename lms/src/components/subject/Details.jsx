import { CCard, CCardBody, CCardHeader, CCardTitle, CCol, CRow } from '@coreui/react'
import React from 'react'

const Details = ({ subject }) => {
  const { subjectCode, subjectTitle, units, course, activeDeactive } = subject
  console.log(subject)
  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Subject Details</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol lg={4} sm={6} xs={12} className="mb-4">
            <h6>Subject Code</h6>
            {subjectCode}
          </CCol>
          <CCol lg={4} sm={6} xs={12} className="mb-4">
            <h6>Subject Title</h6>
            {subjectTitle}
          </CCol>
          <CCol lg={4} sm={6} xs={12} className="mb-4">
            <h6>Units</h6>
            {units}
          </CCol>
          <CCol lg={4} sm={6} xs={12} className="mb-4">
            <h6>Course</h6>
            {course.courseTitle}
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default Details
