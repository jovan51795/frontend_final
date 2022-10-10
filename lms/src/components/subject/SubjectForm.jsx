import React, { useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../../services/departmentService'
import Joi from 'joi'

const SubjectForm = () => {
  const [departments, setDepartments] = useState([])
  const [subjectForm, setSubjectForm] = useState({
    title: '',
    subject_code: '',
    units: 0,
    prerequisites: '',
    active_deactive: true,
    course: {},
    department: {},
  })

  useEffect(() => {
    getAll().then((res) => {
      if (res.data && res.data.status === 1) {
        setDepartments(res.data.object)
      }
    })
  }, [])

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
    <CForm onSubmit={handleSubmit}>
      <CRow className="mb-4">
        <CCol>
          <CCard>
            <CCardBody>
              <CRow>
                {departments.map((dep) => (
                  <CCol xs={12} lg={6} key={dep.departmentId}>
                    <CFormCheck label={dep.departmentName} type="radio" className="mb-2" />
                    <CCard>
                      <CCardBody>
                        {dep.course.map((course) => (
                          <CFormCheck
                            label={course.courseTitle}
                            key={course.courseId}
                            type="radio"
                          />
                        ))}
                      </CCardBody>
                    </CCard>
                  </CCol>
                ))}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Subject Information</strong>
            </CCardHeader>
            <CCardBody>
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default SubjectForm
