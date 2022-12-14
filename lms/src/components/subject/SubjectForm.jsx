import React, { useEffect } from 'react'
import {
  CContainer,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CRow,
  CFormSelect,
} from '@coreui/react'
import { useState } from 'react'
import { getAll } from '../../services/departmentService'
import Joi from 'joi'
import camelCaseToWords from '../../services/lodashService'
import 'src/scss/_admin.scss'
import { IoIosArrowBack } from 'react-icons/io'
import { Btn } from 'src/styles/Btn.styles.'

const SubjectForm = ({ onSubmit, initialValue }) => {
  const [departments, setDepartments] = useState([])
  const [subjectForm, setSubjectForm] = useState(
    initialValue || {
      department_id: null,
      departmentName: '',
      subjectTitle: '',
      subjectCode: '',
      units: 0,
      prerequisites: '',
      course: {},
      yearLevel: '',
    },
  )

  useEffect(() => {
    getAll().then((res) => {
      if (res.data && res.data.status === 1) {
        setDepartments(res.data.object)
      }
    })
  }, [])

  const [errors, seterrors] = useState({})

  const schema = Joi.object({
    subjectCode: Joi.string().required(),
    subjectTitle: Joi.string().required(),
    units: Joi.number().min(1).required(),
    prerequisites: Joi.string().allow('').allow(null).required(),
    course: Joi.object().allow({}).optional(),
    subject_id: Joi.number().allow(),
    activeDeactive: Joi.boolean().allow(),
    professorLoad: Joi.number().allow(null),
    professor: Joi.object().allow(null),
    grades: Joi.allow(null),
    student: Joi.array().allow(),
    course: Joi.allow(),
    attendance: Joi.allow(),
    department_id: Joi.number().allow(null).optional(),
    departmentName: Joi.string().allow('').allow(null).optional(),
    subject_detail_history: Joi.allow(),
    yearLevel: Joi.string().allow('').required(),
    sem: Joi.string().allow(),
  })

  const handleOnChange = (e) => {
    e.preventDefault()
    setSubjectForm({
      ...subjectForm,
      [e.currentTarget.name]: e.currentTarget.value,
    })

    const label = camelCaseToWords(e.currentTarget.name)
    const { error } = schema
      .extract(e.currentTarget.name)
      .label(label)
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
    onSubmit(subjectForm)
  }

  const isFormInvalid = () => {
    const result = schema.validate(subjectForm)
    console.log(result)
    return !!result.error
  }

  const handleChangeCourse = (e, data, dep) => {
    setSubjectForm({
      ...subjectForm,
      [e.currentTarget.name]: data,
      department_id: dep.departmentId,
      departmentName: dep.departmentName,
    })
  }

  return (
    <>
      <CForm onSubmit={handleSubmit}>
        <CRow>
          <div className="txt-style text-center py-3">
            {initialValue ? 'SUBJECT EDIT DETAILS FORM' : 'SUBJECT ADDITION FORM'}
          </div>
        </CRow>
        <CRow className="mb-4">
          <CCol>
            <CCard className="my-3">
              <CCardBody>
                <CRow>
                  {departments.map((dep) => (
                    <CCol xs={12} lg={6} key={dep.departmentId}>
                      <CCardTitle>{dep.departmentName}</CCardTitle>
                      <CCard>
                        <CCardBody>
                          {dep.course.map((course) => (
                            <CFormCheck
                              name="course"
                              checked={
                                subjectForm.course &&
                                course &&
                                subjectForm.course.courseId === course.courseId
                                  ? true
                                  : false
                              }
                              label={course.courseTitle}
                              key={course.courseId}
                              onChange={(e) => handleChangeCourse(e, course, dep)}
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
                <strong>SUBJECT INFORMATION</strong>
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
                      name="subjectTitle"
                      value={subjectForm.subjectTitle}
                      onChange={handleOnChange}
                      invalid={!!errors.subjectTitle}
                      feedback={errors.subjectTitle}
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
                      name="subjectCode"
                      value={subjectForm.subjectCode}
                      onChange={handleOnChange}
                      invalid={!!errors.subjectCode}
                      feedback={errors.subjectCode}
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
                      value={subjectForm.units}
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
                <CRow>
                  <CFormLabel className="col-sm-2 col-form-label">Year Level</CFormLabel>
                  <CCol sm={10} className="mb-3">
                    <CFormSelect
                      name="yearLevel"
                      value={subjectForm.yearLevel}
                      onChange={handleOnChange}
                      invalid={!!errors.yearLevel}
                      feedback={errors.yearLevel}
                    >
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
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
                    SUBMIT
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
      <CContainer className="py-4">
        <Btn big="true" to="/subjects">
          <IoIosArrowBack className="a-icon" /> BACK
        </Btn>
      </CContainer>
    </>
  )
}

export default SubjectForm
