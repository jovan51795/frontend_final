import { CCard, CCardHeader, CCardTitle, CCol, CContainer, CRow } from '@coreui/react'
import { CCardBody } from '@coreui/react-pro'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { professorDetails } from '../../redux/actions/professorAction'
import 'src/scss/_admin.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { Btn } from 'src/styles/Btn.styles.'

const ProfessorDetails = () => {
  const prof = useSelector((state) => state.professor)
  const param = useParams()
  const dispath = useDispatch()

  useEffect(() => {
    dispath(professorDetails(+param.id))
  }, [param, dispath])
  return (
    <>
      <CCard>
        <CCardHeader>
          <CCardTitle className="txt-style">PROFESSOR DETAILS</CCardTitle>
        </CCardHeader>
        <div className="container px-5">
          <CCardBody>
            <CRow>
              <CCol sm={6} className="mb-3">
                <div className="sub">PROFESSOR NO. :</div>
              </CCol>
              <CCol sm={6} className="mb-3">
                <div className="sub2">{prof.professorNo}</div>
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={6} className="mb-3">
                <div className="sub">PROFESSOR NAME :</div>
              </CCol>
              <CCol sm={6} className="mb-3">
                <div className="sub2">
                  {prof.firstName} {prof.lastName}
                </div>
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={6} className="mb-3">
                <div className="sub">GENDER :</div>
              </CCol>
              <CCol sm={6} className="mb-3">
                <div className="sub2">{prof.gender}</div>
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={6} className="mb-3">
                <div className="sub">DATE OF BIRTH :</div>
              </CCol>
              <CCol sm={6} className="mb-3">
                <div className="sub2">{prof.birthdate}</div>
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={6} className="mb-3">
                <div className="sub">WORK :</div>
              </CCol>
              <CCol sm={6} className="mb-3">
                <div className="sub2">{prof.work}</div>
              </CCol>
            </CRow>
            <hr />
            <CRow>
              <CCol sm={6} className="mb-3">
                <div className="sub">STATUS :</div>
              </CCol>
              <CCol sm={6} className="mb-3">
                <div className="sub2">{prof.status}</div>
              </CCol>
            </CRow>
          </CCardBody>
        </div>
      </CCard>
      <CContainer className="py-4">
        <Btn big="true" to="/professors">
          <IoIosArrowBack className="a-icon" /> BACK
        </Btn>
      </CContainer>
    </>
  )
}

export default ProfessorDetails
