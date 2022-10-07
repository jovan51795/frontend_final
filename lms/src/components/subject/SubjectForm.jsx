import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Joi from 'joi'

const SubjectForm = () => {
  const [subjectForm, setSubjectForm] = useState({
    title: '',
    subject_code: '',
    units: 0,
    prerequisites: '',
    active_deactive: true,
  })

  const [errors, seterrors] = useState({})
  const dispatch = useDispatch()

  const schema = Joi.object({
    subject_code: Joi.string().required(),
    title: Joi.string().required(),
    units: Joi.number().min(1).required(),
    prerequisites: Joi.string(),
    active_deactive: Joi.boolean(),
  })

  const handleOnChange = (e) => {
    e.preventDefault()
    setSubjectForm({
      ...subjectForm,
      [e.currentTarget.name]: e.currentTarget.value,
    })

    const { error } = schema
      .extract(e.currentTarget.name)
      .label(e.currentTarget.name.toUpperCase())
      .validate(e.currentTarget.value)

    if (error) {
      seterrors({
        ...errors,
        [e.currentTarget.name]: error.details[0].message,
      })
    } else {
      delete errors[e.currentTarget.name]
      seterrors(errors)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(subjectForm)
    // put dispatch function here
  }

  const isFormInvalid = () => {
    const result = schema.validate(subjectForm)
    return !!result.error
  }

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Subject Information</strong>
        </CCardHeader>
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <CRow className="mb-3">
              <CFormLabel htmlFor="title" className="col-sm-2 col-form-label">
                Title:
              </CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  id="title"
                  placeholder="Enter subject title"
                  name="title"
                  value={subjectForm.title}
                  onChange={handleOnChange}
                  invalid={!!errors.title}
                  feedback={errors.title}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="subject_code" className="col-sm-2 col-form-label">
                Code:
              </CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  id="subject_code"
                  placeholder="Enter subject code"
                  name="subject_code"
                  value={subjectForm.subject_code}
                  onChange={handleOnChange}
                  invalid={!!errors.subject_code}
                  feedback={errors.subject_code}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="units" className="col-sm-2 col-form-label">
                Units:
              </CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="number"
                  id="units"
                  placeholder="Enter number of units"
                  name="units"
                  onChange={handleOnChange}
                  invalid={!!errors.units}
                  feedback={errors.units}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="prerequisities" className="col-sm-2 col-form-label">
                Prerequisities:
              </CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  id="prerequisites"
                  placeholder="Enter subject prerequisites"
                  name="prerequisites"
                  value={subjectForm.prerequisites}
                  onChange={handleOnChange}
                  invalid={!!errors.prerequisites}
                  feedback={errors.prerequisites}
                />
              </CCol>
            </CRow>
            <div className="d-grid">
              <CButton type="submit" color="primary" disabled={isFormInvalid()}>
                Add Subject
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default SubjectForm
