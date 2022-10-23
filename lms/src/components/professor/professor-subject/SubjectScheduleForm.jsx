import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CFormInput,
  CFormSelect,
  CButton,
  CForm,
} from '@coreui/react'
import React, { useState } from 'react'
import Joi from 'joi'
import 'src/scss/_admin.scss'

const SubjectScheduleForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    academicYear: '',
    sem: '',
    schedule: '',
    section: '',
    startDate: '',
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
    startDate: Joi.string().required(),
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
  }

  const timeSchedules = [
    '8:00-9:00',
    '9:00-10:00',
    '11:00-12:00',
    '12:00-13:00',
    '13:00-14:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
  ]

  return (
    <>
      <CCard style={{ overflow: 'scroll', overflow: 'auto' }}>
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
                  <option disabled selected value="">
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
                  <option disabled selected value="">
                    Semester
                  </option>
                  <option value="1st Semester">1st sem</option>
                  <option value="2nd Semester">2nd sem</option>
                  <option value="3rd Semester">3rd sem</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol>
                <div>
                  <CFormInput
                    type="date"
                    label="Start Date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                  />
                </div>
              </CCol>
              <CCol></CCol>
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
                  <option disabled selected value="">
                    Schedule Time
                  </option>
                  {timeSchedules.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
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
                  <option disabled selected value="">
                    Year Level
                  </option>
                  <option value="Freshmen">Freshmen</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
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
                  <option disabled selected value="">
                    Status
                  </option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </CFormSelect>
              </CCol>
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
    </>
  )
}

export default SubjectScheduleForm
