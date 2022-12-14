import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import Joi from 'joi'
import React, { useState } from 'react'
import camelCaseToWords from '../../services/lodashService'

const ProfessorForm = ({ onSubmit, initialValue }) => {
  const [form, setFrom] = useState(
    initialValue || {
      professorNo: '',
      firstName: '',
      lastName: '',
      work: '',
      gender: '',
      status: 'Regular',
      birthdate: '',
    },
  )

  const [errors, setErrors] = useState({})

  const schema = Joi.object({
    professor_id: Joi.number().allow(),
    professorNo: Joi.string().allow('').required(),
    firstName: Joi.string().allow('').required(),
    lastName: Joi.string().allow('').min(7).required(),
    work: Joi.string().allow('').min(7).required(),
    gender: Joi.string().allow('').min(4).required(),
    status: Joi.string().allow('').required(),
    password: Joi.string().allow(''),
    activeDeactive: Joi.boolean().allow(),
    type: Joi.string().allow(),
    student: Joi.allow(),
    birthdate: Joi.string()
      .required()
      .optional()
      .custom((value, helper) => {
        var dob = new Date(value.split(' ')[0])
        var dateNow = new Date()
        if (dateNow.getFullYear() - dob.getFullYear() < 15) {
          return helper.message('Invalid birth date, age must be greate than or equal to 15')
        } else {
          return true
        }
      }),
  })

  const handleChange = (e, isPreventable) => {
    if (!isPreventable) {
      e.preventDefault()
    }
    setFrom({ ...form, [e.currentTarget.name]: e.currentTarget.value })

    const { error } = schema
      .extract(e.currentTarget.name)
      .label(camelCaseToWords(e.currentTarget.name))
      .validate(e.currentTarget.value)
    if (error) {
      setErrors({ ...errors, [e.currentTarget.name]: error.details[0].message })
    } else {
      delete errors[e.currentTarget.name]
      setErrors(errors)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  const isFormValid = () => {
    const result = schema.validate(form)
    return !!result.error
  }
  return (
    <CForm onSubmit={handleSubmit}>
      <CCard>
        <CCardHeader>
          <CCardTitle>Add professor</CCardTitle>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Professor Number</CFormLabel>
            <CCol sm={10}>
              <CFormInput
                value={form.professorNo}
                invalid={!!errors.professorNo}
                feedback={errors.professorNo}
                onChange={(e) => handleChange(e, false)}
                name="professorNo"
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">First Name</CFormLabel>
            <CCol sm={10}>
              <CFormInput
                name="firstName"
                value={form.firstName}
                onChange={(e) => handleChange(e, false)}
                invalid={!!errors.firstName}
                feedback={errors.firstName}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Last Name</CFormLabel>
            <CCol sm={10}>
              <CFormInput
                name="lastName"
                value={form.lastName}
                onChange={(e) => handleChange(e, false)}
                invalid={!!errors.lastName}
                feedback={errors.lastName}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Work</CFormLabel>
            <CCol sm={10}>
              <CFormInput
                name="work"
                value={form.work}
                invalid={!!errors.work}
                feedback={errors.work}
                onChange={(e) => handleChange(e, false)}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Gender</CFormLabel>
            <CCol sm={10}>
              <CRow>
                <CCol>
                  <CFormCheck
                    type="radio"
                    checked={form.gender === 'male' && true}
                    onChange={(e) => handleChange(e, true)}
                    value="male"
                    name="gender"
                    label="male"
                  />
                </CCol>
                <CCol>
                  <CFormCheck
                    type="radio"
                    checked={form.gender === 'female' && true}
                    onChange={(e) => handleChange(e, true)}
                    value="female"
                    name="gender"
                    label="female"
                  />
                </CCol>
              </CRow>
              {!!errors.gender && <CFormFeedback>{errors.gender}</CFormFeedback>}
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Status</CFormLabel>
            <CCol sm={10}>
              <CFormSelect
                name="status"
                value={form.status}
                onChange={(e) => handleChange(e, false)}
                invalid={!!errors.status}
                feedback={errors.status}
              >
                <option value="Regular">Regular</option>
                <option value="Contractual">Contractual</option>
              </CFormSelect>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Date of birth</CFormLabel>
            <CCol sm={10}>
              <CFormInput
                value={form.birthdate}
                onChange={(e) => handleChange(e, false)}
                invalid={!!errors.birthdate}
                feedback={errors.birthdate}
                type="date"
                name="birthdate"
              />
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter className="d-flex justify-content-end">
          <CButton type="submit" disabled={isFormValid()}>
            Submit
          </CButton>
        </CCardFooter>
      </CCard>
    </CForm>
  )
}

export default ProfessorForm
