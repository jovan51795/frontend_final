import React from 'react'
import {
  CCard,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CRow,
  CCol,
  CContainer,
  CCardBody,
  CForm,
  CFormTextarea,
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react'

const AttendanceCard = ({ student }) => {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>ATTENDANCE CARD</CCardHeader>
          {student?.map((student) => (
            <CListGroup flush key={student[0]}>
              <CListGroupItem>
                <CRow>
                  <CCol sm={6}>SUBJECT CODE:&nbsp;&nbsp; {student[6]}</CCol>
                  <CCol sm={6}>SUBJECT TITLE:&nbsp;&nbsp; {student[5].toUpperCase()}</CCol>
                </CRow>
              </CListGroupItem>
              <CListGroupItem>
                <CRow>
                  <CCol md={3} sm={4}>
                    STUDENT NAME:{' '}
                  </CCol>
                  <CCol md={9} sm={8}>
                    {student[3].toUpperCase()}, {student[1].toUpperCase()}{' '}
                    {student[2].toUpperCase()}
                  </CCol>
                </CRow>
              </CListGroupItem>
            </CListGroup>
          ))}
        </CCard>
      </CContainer>
    </>
  )
}

export default AttendanceCard
