import { CCard, CCardHeader, CCardTitle, CCol, CRow } from '@coreui/react'
import { CCardBody } from '@coreui/react-pro'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { professorDetails } from '../../redux/actions/professorAction'

const ProfessorDetails = () => {
  const prof = useSelector((state) => state.professor)
  const param = useParams()
  const dispath = useDispatch()

  useEffect(() => {
    dispath(professorDetails(+param.id))
  }, [param, dispath])
  return (
    <CCard>
      <CCardHeader>
        <CCardTitle>Details</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md={4} xs={12} sm={6} className="mb-3">
            <CCardTitle>Professor No.</CCardTitle>
            <div>{prof.professorNo}</div>
          </CCol>
          <CCol md={4} xs={12} sm={6} className="mb-3">
            <CCardTitle>Professor Name</CCardTitle>
            <div>{prof.professorName}</div>
          </CCol>
          <CCol md={4} xs={12} sm={6} className="mb-3">
            <CCardTitle>Gender</CCardTitle>
            <div>{prof.gender}</div>
          </CCol>
          <CCol md={4} xs={12} sm={6} className="mb-3">
            <CCardTitle>Work</CCardTitle>
            <div>{prof.work}</div>
          </CCol>
          <CCol md={4} xs={12} sm={6} className="mb-3">
            <CCardTitle>Status</CCardTitle>
            <div>{prof.status}</div>
          </CCol>
          <CCol md={4} xs={12} sm={6} className="mb-3">
            <CCardTitle>Date of birth</CCardTitle>
            <div>{prof.birthdate}</div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default ProfessorDetails
