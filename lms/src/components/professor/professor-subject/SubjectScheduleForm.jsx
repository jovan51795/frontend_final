import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CFormLabel,
  CCol,
  CFormInput,
  CFormSelect,
  CButton,
  CForm,
} from '@coreui/react'
import React, { useState } from 'react'
import Joi from 'joi'

const SubjectScheduleForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    academicYear: '',
    sem: '',
    schedule: '',
    section: '',
    yearLevel: '',
    status: '',
  })
  const [errors, setErrors] = useState({})
  const handleChange = (event) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })
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
  const schema = Joi.object({
    academicYear: Joi.string().required(),
    sem: Joi.string().required(),
    schedule: Joi.string().required(),
    section: Joi.string().required(),
    yearLevel: Joi.string().required(),
    yearLevel: Joi.string().required(),
    status: Joi.string().required(),
  })
  const isFormInvalid = () => {
    const result = schema.validate(form)
    return !!result.error
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(form)
    console.log(form)
  }
  return (
    <>
      <CCard>
        <CCardHeader>
          <strong>Schedule Form</strong>
        </CCardHeader>
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <CRow className="mb-3">
              <CCol>
                <CFormSelect
                  name="academicYear"
                  invalid={!!errors.academicYear}
                  feedback={errors.academicYear}
                  value={form.academicYear}
                  onChange={handleChange}
                >
                  <option selected value="">
                    Academic Year
                  </option>
                  <option value="2021-2022">2021-2022</option>
                  <option value="2022-2023">2022-2023</option>
                </CFormSelect>
              </CCol>
              <CCol>
                <CFormSelect
                  name="sem"
                  invalid={!!errors.sem}
                  feedback={errors.sem}
                  value={form.sem}
                  onChange={handleChange}
                >
                  <option selected value="">
                    Semester
                  </option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <CFormSelect
                  name="schedule"
                  invalid={!!errors.schedule}
                  feedback={errors.schedule}
                  value={form.schedule}
                  onChange={handleChange}
                >
                  <option selected value="">
                    Schedule Time
                  </option>
                  <option value="8:00-9:00">8:00-9:00</option>
                  <option value="9:00-10:00">9:00-10:00</option>
                  <option value="10:00-11:00">10:00-11:00</option>
                  <option value="11:00-12:00">11:00-12:00</option>
                  <option value="12:00-13:00">12:00-13:00</option>
                </CFormSelect>
              </CCol>
              <CCol>
                <CFormInput
                  type="text"
                  placeholder="Enter Section"
                  name="section"
                  invalid={!!errors.section}
                  feedback={errors.section}
                  value={form.section}
                  onChange={handleChange}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <CFormSelect
                  name="yearLevel"
                  invalid={!!errors.yearLevel}
                  feedback={errors.yearLevel}
                  value={form.yearLevel}
                  onChange={handleChange}
                >
                  <option selected value="">
                    Year Level
                  </option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </CFormSelect>
              </CCol>
              <CCol>
                <CFormSelect
                  name="status"
                  invalid={!!errors.status}
                  feedback={errors.status}
                  value={form.status}
                  onChange={handleChange}
                >
                  <option selected value="">
                    Status
                  </option>
                  <option value="Not Completed">Not Completed</option>
                  <option value="Completed">Completed</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <div className="d-grid">
              <CButton type="submit" color="primary" disabled={isFormInvalid()}>
                Submit
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default SubjectScheduleForm
