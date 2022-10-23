import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getStudentGrade, setStudentGrade } from 'src/services/professorService'
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
import 'src/scss/_grades.scss'
import Joi from 'joi'

const EvaluationCard = ({ student, onSubmit, gradeData }) => {
  const [grades, setGrades] = useState({
    prelimGrade: '',
    midtermGrade: '',
    remarks: '',
    comment: '',
  })

  const [errors, setErrors] = useState({})

  const schema = Joi.object({
    prelimGrade: Joi.number().allow(),
    midtermGrade: Joi.number().allow(),
    remarks: Joi.string().allow(''),
    comment: Joi.string().allow(''),
  })

  const handleOnChange = (event) => {
    setGrades({ ...grades, [event.currentTarget.name]: event.currentTarget.value })
    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name.toUpperCase())
      .validate(event.currentTarget.value)
    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      })
    } else {
      delete errors[event.currentTarget.name]
      setErrors(errors)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(grades)
  }

  const isFormInvalid = () => {
    const result = schema.validate(grades)
    return !!result.error
  }

  // console.log(gradeData)
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>CLASS CARD</CCardHeader>
          {student?.map((student) => (
            <CListGroup flush key={student[0]}>
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
              <CListGroupItem>
                <CRow>
                  <CCol sm={6}>SUBJECT CODE:&nbsp;&nbsp; {student[6]}</CCol>
                  <CCol sm={6}>SUBJECT TITLE:&nbsp;&nbsp; {student[5].toUpperCase()}</CCol>
                </CRow>
              </CListGroupItem>
            </CListGroup>
          ))}

          <CCard style={{ overflow: 'scroll', overflow: 'auto' }}>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow className="mb-3">
                  <CCol>
                    <CFormInput
                      type="text"
                      label="Prelim Grade"
                      name="prelimGrade"
                      invalid={!!errors.prelimGrade}
                      feedback={errors.prelimGrade}
                      value={grades.prelimGrade}
                      onChange={handleOnChange}
                    />
                  </CCol>
                  <CCol>
                    <CFormInput
                      type="text"
                      label="Midterm Grade"
                      name="midtermGrade"
                      invalid={!!errors.midtermGrade}
                      feedback={errors.midtermGrade}
                      value={grades.midtermGrade}
                      onChange={handleOnChange}
                    />
                  </CCol>
                  <CCol>
                    <CFormSelect
                      name="remarks"
                      label="Remarks"
                      invalid={!!errors.remarks}
                      feedback={errors.remarks}
                      value={grades.remarks}
                      onChange={handleOnChange}
                    >
                      <option disabled>Remarks</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Satisfactory">Satisfactory</option>
                      <option value="Poor">Poor</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mb-3 mx-1">
                  <CFormInput
                    name="comment"
                    label="Comments"
                    invalid={!!errors.comment}
                    feedback={errors.comment}
                    value={grades.comment}
                    onChange={handleOnChange}
                  ></CFormInput>
                </CRow>
                <div className="d-grid">
                  <CButton
                    type="submit"
                    color="primary"
                    disabled={isFormInvalid()}
                    className="btn-color"
                  >
                    Submit
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCard>
      </CContainer>
    </>
  )
}

export default EvaluationCard
