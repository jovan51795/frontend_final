import { cilPlus, cilTrash } from '@coreui/icons'
import { TiCancel } from 'react-icons/ti'
import CIcon from '@coreui/icons-react'
import {
  CContainer,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CRow,
} from '@coreui/react'
import React, { useState } from 'react'
import Joi from 'joi'
import { IoIosArrowBack } from 'react-icons/io'
import 'src/scss/_admin.scss'
import { Btn } from 'src/styles/Btn.styles.'

const DepartmentForm = ({ initialValue, onSubmit }) => {
  const [department, setDepartment] = useState(
    initialValue || {
      departmentName: '',
      logo: '',
      altlogo: '',
      link: '',
      course: [],
    },
  )

  const [errors, setErrors] = useState({
    departmentName: '',
    logo: '',
    altlogo: '',
    link: '',
    course: [{ courseTitle: '', courseCode: '' }],
  })

  const schema = Joi.object({
    departmentId: Joi.number().allow(),
    departmentName: Joi.string().required(),
    logo: Joi.string().allow(''),
    altlogo: Joi.string().allow(''),
    link: Joi.string().allow(''),
    course: Joi.array().items(
      Joi.object({
        student: Joi.array().allow(),
        courseId: Joi.number().allow(),
        courseCode: Joi.string().required(),
        courseTitle: Joi.string().required(),
      }),
    ),
  })

  const handleAddCourse = () => {
    setDepartment({
      ...department,
      course: [...department.course, { courseTitle: '', courseCode: '' }],
    })

    setErrors({ ...errors, course: [...errors.course, { courseTitle: '', courseCode: '' }] })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    onSubmit(department)
    setDepartment(
      initialValue || {
        departmentName: '',
        logo: '',
        altlogo: '',
        link: '',
        course: [],
      },
    )
    setErrors({
      departmentName: '',
      course: [{ courseTitle: '', courseCode: '' }],
    })
  }

  const handleOnChange = (event) => {
    event.preventDefault()
    setDepartment({ ...department, [event.currentTarget.name]: event.currentTarget.value })
    validate(event)
  }

  const handleChangeSelect = (event, idx) => {
    event.preventDefault()
    department.course[idx] = {
      ...department.course[idx],
      [event.currentTarget.name]: event.currentTarget.value,
    }
    setDepartment({
      ...department,
    })

    const { error } = schema.validate(department)

    if (error) {
      errors.course[idx] = { [event.currentTarget.name]: 'this field is required' }
      setErrors({ ...errors })
    } else {
      delete errors.course[idx][event.currentTarget.name]
      setErrors(errors)
    }
  }

  const handleDeleteCourse = (idx) => {
    department.course.splice(idx, 1)
    setDepartment({
      ...department,
    })
  }

  const validate = (e) => {
    const { error } = schema
      .extract(e.currentTarget.name)
      .label(e.currentTarget.name.toUpperCase())
      .validate(e.currentTarget.value)
    if (error) {
      setErrors({ ...errors, [e.currentTarget.name]: error.details[0].message })
    } else {
      delete errors[e.currentTarget.name]
      setErrors(errors)
    }
  }

  const isFormInvalid = () => {
    const result = schema.validate(department)
    return !!result.error
  }

  return (
    <>
      <CForm onSubmit={handleOnSubmit}>
        <CCard>
          <CCardBody>
            <CRow>
              <CCol>
                <CFormLabel>DEPARTMENT NAME</CFormLabel>
                <CFormInput
                  onChange={handleOnChange}
                  name="departmentName"
                  value={department.departmentName}
                  invalid={!!errors.departmentName}
                  feedback={errors.departmentName}
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormLabel>DEPARTMENT LOGO</CFormLabel>
                <CFormInput
                  onChange={handleOnChange}
                  name="logo"
                  value={department.logo}
                  invalid={!!errors.logo}
                  feedback={errors.logo}
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormLabel>DEPARTMENT LOGO ALT TEXT</CFormLabel>
                <CFormInput
                  onChange={handleOnChange}
                  name="altlogo"
                  value={department.altlogo}
                  invalid={!!errors.altlogo}
                  feedback={errors.altlogo}
                />
              </CCol>
            </CRow>
            <CRow className="mt-4">
              <CCol>
                <CButton onClick={() => handleAddCourse()} className="btn-color">
                  <CIcon icon={cilPlus} color="danger" className="me-2" />
                  Add Course
                </CButton>
              </CCol>
            </CRow>

            {department.course.map((crse, idx) => (
              <CRow key={idx} className="mt-4">
                <CCol>
                  <CInputGroup>
                    <CFormInput
                      name="courseTitle"
                      onChange={(e) => handleChangeSelect(e, idx)}
                      value={crse.courseTitle}
                      placeholder="Course Title"
                      invalid={department.course[idx].courseTitle === '' ? true : false}
                    />
                    <CFormInput
                      name="courseCode"
                      onChange={(e) => handleChangeSelect(e, idx)}
                      value={crse.courseCode}
                      placeholder="Course Code"
                      invalid={department.course[idx].courseCode === '' ? true : false}
                    />

                    <CButton className="btn-color2" onClick={() => handleDeleteCourse(idx)}>
                      <TiCancel className="c-icon" />
                    </CButton>
                  </CInputGroup>
                </CCol>
                <CRow>
                  <CCol>
                    {(department.course[idx].courseCode === '' ||
                      department.course[idx].courseTitle === '') && (
                      <CFormFeedback className="text-danger">
                        This is fields are required
                      </CFormFeedback>
                    )}
                  </CCol>
                </CRow>
              </CRow>
            ))}
          </CCardBody>
          <CCardFooter>
            <CRow className="d-flex justify-content-center p-3">
              <CButton className="d-block btn-color" type="submit" disabled={isFormInvalid()}>
                Submit
              </CButton>
            </CRow>
          </CCardFooter>
        </CCard>
      </CForm>
      <CRow>
        <CContainer className="py-4">
          <Btn big="true" to="/departments">
            <IoIosArrowBack className="a-icon" /> BACK
          </Btn>
        </CContainer>
      </CRow>
    </>
  )
}

export default DepartmentForm
