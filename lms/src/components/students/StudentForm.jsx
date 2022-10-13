import {
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CCardFooter,
  CButton,
  CFormCheck,
  CCardHeader,
  CCardTitle,
  CFormSelect,
} from '@coreui/react'
import Joi from 'joi'
import React, { useEffect, useState } from 'react'
import { getAllDepartmentWithSubject } from '../../services/departmentService'
import camelCaseToWords from '../../services/lodashService'

const StudentForm = ({ onSubmit, initialValue }) => {
  const [departments, setDepartments] = useState([])
  const [subjects, setSubjects] = useState([])
  const [form, setForm] = useState(
    initialValue || {
      studentNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      academicYear: '',
      sem: '1st Sem',
      status: 'regular',
      birthDate: '',
      department: {},
      course: {},
      subject: [],
    },
  )
  const [errors, seterrors] = useState({})
  useEffect(() => {
    getAllDepartmentWithSubject().then((res) => {
      setDepartments([...res.data.object])
      console.log(res.data)
      setSubjects([...res.data.subjects])
    })
  }, [])

  const schema = Joi.object({
    student_id: Joi.number().allow(),
    studentNo: Joi.string().required(),
    firstName: Joi.string().required(),
    middleName: Joi.string().required(),
    lastName: Joi.string().required(),
    academicYear: Joi.string().required(),
    sem: Joi.string().required(),
    status: Joi.string().required(),
    birthDate: Joi.string()
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
    department: Joi.object().allow({}).optional(),
    course: Joi.object().allow({}).optional(),
    subject: Joi.array().optional().required(),
    password: Joi.string().allow(),
    active_deactive: Joi.bool().allow(),
    program: Joi.allow({}).optional(),
    grades: Joi.allow(),
    type: Joi.allow(),
  })

  const handleChange = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })

    const label = camelCaseToWords(e.currentTarget.name)

    const { error } = schema
      .extract(e.currentTarget.name)
      .label(label)
      .validate(e.currentTarget.value)
    if (error) {
      seterrors({ ...errors, [e.currentTarget.name]: error.details[0].message })
    } else {
      delete errors[e.currentTarget.name]
      seterrors(errors)
    }
  }

  const handleChangeDep = (e, data, type) => {
    if (type === 'dep') {
      const department = { ...data }
      delete department.course
      setForm({ ...form, [e.currentTarget.name]: department })
    }

    setForm({ ...form, [e.currentTarget.name]: data })
  }

  const handleChangeSub = (e, data) => {
    if (!e.target.checked) {
      const index = form.subject.findIndex((s) => s.subject_id === data.subject_id)
      form.subject.splice(index, 1)
      return setForm(form)
    }
    return setForm({ ...form, subject: [...form.subject, data] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    onSubmit(form)
  }

  const handleCourseCheck = (data) => {
    var result = false
    form.subject.filter((sub) => {
      if (form.subject.length > 0 && sub.subject_id === data.subject_id) {
        result = true
      } else {
        result = false
      }
    })
    return result
  }

  const isFormInvalid = () => {
    const result = schema.validate(form)
    return !!result.error
  }
  return (
    <CForm onSubmit={handleSubmit}>
      <CCard>
        <CCardBody>
          <CRow className="mb-3">
            <CCol lg={6}>
              <CFormLabel>Student Number</CFormLabel>
              <CFormInput
                name="studentNo"
                value={form.studentNo}
                onChange={handleChange}
                placeholder="Student number"
                invalid={!!errors.studentNo}
                feedback={errors.studentNo}
              />
            </CCol>
            <CCol lg={6}>
              <CFormLabel>First Name</CFormLabel>
              <CFormInput
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                invalid={!!errors.firstName}
                feedback={errors.firstName}
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol lg={6}>
              <CFormLabel>Middle Name</CFormLabel>
              <CFormInput
                name="middleName"
                value={form.middleName}
                onChange={handleChange}
                placeholder="Middle Name"
                invalid={!!errors.middleName}
                feedback={errors.middleName}
              />
            </CCol>
            <CCol lg={6}>
              <CFormLabel>Last Name</CFormLabel>
              <CFormInput
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                invalid={!!errors.lastName}
                feedback={errors.lastName}
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol lg={6}>
              <CFormLabel>Academic Year</CFormLabel>
              <CFormInput
                name="academicYear"
                value={form.academicYear}
                onChange={handleChange}
                placeholder="Academic Year"
                invalid={!!errors.academicYear}
                feedback={errors.academicYear}
              />
            </CCol>
            <CCol lg={6}>
              <CFormLabel>Sem</CFormLabel>
              <CFormSelect
                name="sem"
                value={form.sem}
                onChange={handleChange}
                placeholder="Sem"
                invalid={!!errors.sem}
                feedback={errors.sem}
              >
                <option defaultValue="1st Sem" value="1st Sem">
                  1st Sem
                </option>
                <option value="2nd Sem">2nd Sem</option>
              </CFormSelect>
            </CCol>
          </CRow>
          <CRow className="mb-4">
            <CCol lg={6}>
              <CFormLabel>Status</CFormLabel>
              <CFormSelect
                name="status"
                value={form.status}
                onChange={handleChange}
                invalid={!!errors.status}
                feedback={errors.status}
              >
                <option value="regular">Regular</option>
                <option value="irregular">Irregular</option>
              </CFormSelect>
            </CCol>
            <CCol lg={6}>
              <CFormLabel>Birth Date</CFormLabel>
              <CFormInput
                name="birthDate"
                value={form.birthDate}
                onChange={handleChange}
                type="date"
                placeholder="Birth Date"
                invalid={!!errors.birthDate}
                feedback={errors.birthDate}
              />
            </CCol>
          </CRow>

          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                  <CCardTitle>Departments and Courses</CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    {departments.map((dep) => (
                      <CCol key={dep.departmentId} sm={6} lg={6} className="mb-2">
                        <CFormCheck
                          checked={form.department.departmentId === dep.departmentId ? true : false}
                          type="radio"
                          value={dep}
                          name="department"
                          label={dep.departmentName}
                          onChange={(e) => handleChangeDep(e, dep, 'dep')}
                        />
                        {dep.course.map((crs) => (
                          <CRow key={crs.courseId} className="ms-2">
                            <CCol>
                              <CFormCheck
                                checked={form.course.courseId === crs.courseId ? true : false}
                                value={crs}
                                name="course"
                                type="radio"
                                label={crs.courseTitle}
                                onChange={(e) => handleChangeDep(e, crs, 'course')}
                              />
                              <CCard>
                                <CCardHeader>
                                  <span>Subjects {!subjects.toString()}</span>
                                </CCardHeader>
                                <CCardBody>
                                  {subjects.map((sub, idx) => (
                                    <CRow key={sub.subject_id}>
                                      <CCol>
                                        {sub.course && crs.courseId === sub.course.courseId && (
                                          <CFormCheck
                                            //   checked={handleCourseCheck(sub)}
                                            name="subject"
                                            onChange={(e) => handleChangeSub(e, sub)}
                                            label={sub.subjectTitle}
                                          />
                                        )}
                                      </CCol>
                                    </CRow>
                                  ))}
                                </CCardBody>
                              </CCard>
                            </CCol>
                          </CRow>
                        ))}
                      </CCol>
                    ))}
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" className="mr-4" disabled={isFormInvalid()}>
            Submit
          </CButton>
        </CCardFooter>
      </CCard>
    </CForm>
  )
}

export default StudentForm
