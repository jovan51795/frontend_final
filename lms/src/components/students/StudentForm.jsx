import {
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CRow,
  CCol,
  CCardFooter,
  CButton,
  CCollapse,
} from '@coreui/react'
import React, { useState } from 'react'

const StudentForm = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CCard>
      <CCardBody>
        <CForm>
          <CRow className="mb-3">
            <CCol lg={6}>
              <CFormLabel>Student Number</CFormLabel>
              <CFormInput placeholder="Student number" />
            </CCol>
            <CCol lg={6}>
              <CFormLabel>First Name</CFormLabel>
              <CFormInput placeholder="First Name" />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol lg={6}>
              <CFormLabel>Middle Name</CFormLabel>
              <CFormInput placeholder="Middle Name" />
            </CCol>
            <CCol lg={6}>
              <CFormLabel>Last Name</CFormLabel>
              <CFormInput placeholder="Last Name" />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol lg={6}>
              <CFormLabel>Academic Year</CFormLabel>
              <CFormInput placeholder="Academic Year" />
            </CCol>
            <CCol lg={6}>
              <CFormLabel>Sem</CFormLabel>
              <CFormInput placeholder="Sem" />
            </CCol>
          </CRow>
        </CForm>
        <CCollapse visible={visible}>
          <CCard>
            <CCardBody>the body</CCardBody>
          </CCard>
        </CCollapse>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" className="mr-4">
          Submit
        </CButton>
        <CButton color="success" className="mx-4" onClick={() => setVisible(!visible)}>
          Add Subject
        </CButton>
      </CCardFooter>
    </CCard>
  )
}

export default StudentForm
