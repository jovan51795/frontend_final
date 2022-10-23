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
import 'src/scss/_admin.scss'

const StudentForm = ({ onSubmit, initialValue }) => {
  const [departments, setDepartments] = useState([])
  const [subjects, setSubjects] = useState([])
  const [form, setForm] = useState(
    initialValue || {
      studentNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      yearLevel: '',
      sem: '1st Sem',
      status: 'regular',
      birthDate: '',
      address: '',
      mobileNumber: '',
      emergencyContactPerson: '',
      emergencyContactNumber: '',
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
    yearLevel: Joi.string().required(),
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
    address: Joi.string().allow(),
    mobileNumber: Joi.string().allow(),
    emergencyContactPerson: Joi.string().allow(),
    emergencyContactNumber: Joi.string().allow(),
    department: Joi.object().allow({}).optional(),
    course: Joi.object().allow({}).optional(),
    subject: Joi.array().optional().required(),
    password: Joi.string().allow(),
    active_deactive: Joi.bool().allow(),
    program: Joi.allow({}).optional(),
    grades: Joi.allow(),
    type: Joi.allow(),
    address: Joi.allow(),
    mobileNumber: Joi.allow(),
    emergencyContactPerson: Joi.allow(),
    emergencyContactNumber: Joi.allow(),
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
      return setForm({ ...form, [e.currentTarget.name]: department })
    }

    setForm({ ...form, [e.currentTarget.name]: data })
  }

  const handleChangeSub = (e, data) => {
    if (!e.target.checked) {
      const index = form.subject.findIndex((s) => s.subject_id === data.subject_id)
      form.subject.splice(index, 1)
      return setForm(form)
    }
    const subject = { ...data }
    delete subject.course
    delete subject.student
    return setForm({ ...form, subject: [...form.subject, data] })
  }

  const handleSubmit = (e) => {
    const data = { ...form }
    if (!data.department.departmentId) {
      delete data.department
    }
    if (!form.course.courseId) {
      delete data.course
    }
    e.preventDefault()
    console.log(data)
    onSubmit(data)
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
    return false
  }
  return (
    <CForm onSubmit={handleSubmit}>
      <CCard className="notrounded">
        <CCardHeader>
          <CCardTitle className="text-center txt-style pt-1">
            {initialValue ? 'STUDENT DETAILS EDIT FORM' : 'STUDENT ENROLLMENT FORM'}
          </CCardTitle>
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <CCol lg={6} className="mb-3">
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
            <CCol lg={6} className="mb-3">
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
            <CCol lg={6} className="mb-3">
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
            <CCol lg={6} className="mb-3">
              <CFormLabel>Year Level</CFormLabel>
              <CFormSelect
                name="yearLevel"
                value={form.status}
                onChange={handleChange}
                invalid={!!errors.status}
                feedback={errors.status}
              >
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </CFormSelect>
            </CCol>
            <CCol lg={6} className="mb-3">
              <CFormLabel>Semester</CFormLabel>
              <CFormSelect
                name="sem"
                value={form.sem}
                onChange={handleChange}
                placeholder="Sem"
                invalid={!!errors.sem}
                feedback={errors.sem}
              >
                <option defaultValue="1st Semester" value="1st Semester">
                  1st Semester
                </option>
                <option value="2nd Semester">2nd Semester</option>
                <option value="3rd Semester">3rd Semester</option>
              </CFormSelect>
            </CCol>
            <CCol lg={6} className="mb-3">
              <CFormLabel>Status</CFormLabel>
              <CFormSelect
                name="status"
                value={form.status}
                onChange={handleChange}
                invalid={!!errors.status}
                feedback={errors.status}
              >
                <option value="Regular">Regular</option>
                <option value="Irregular">Irregular</option>
              </CFormSelect>
            </CCol>
            <CCol lg={6} className="mb-3">
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
            <CCol lg={6} className="mb-3">
              <CFormLabel>Mobile Number</CFormLabel>
              <CFormInput
                name="mobileNumber"
                value={form.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile Number"
                invalid={!!errors.mobileNumber}
                feedback={errors.mobileNumber}
              />
            </CCol>
            <CCol lg={12} className="mb-3">
              <CFormLabel>Address</CFormLabel>
              <CFormInput
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                invalid={!!errors.address}
                feedback={errors.address}
              />
            </CCol>
            <div className="sub p-2 text-center">EMERGENCY CONTACT INFORMATION</div>
            <CCol lg={6} className="mb-3">
              <CFormLabel>Emergency Contact Person:</CFormLabel>
              <CFormInput
                name="emergencyContactPerson"
                value={form.emergencyContactPerson}
                onChange={handleChange}
                placeholder="Contact Person"
                invalid={!!errors.emergencyContactPerson}
                feedback={errors.emergencyContactPerson}
              />
            </CCol>
            <CCol lg={6} className="mb-3">
              <CFormLabel>Emergency Contact Number:</CFormLabel>
              <CFormInput
                name="emergencyContactNumber"
                value={form.emergencyContactNumber}
                onChange={handleChange}
                placeholder="Emergency Contact Numberr"
                invalid={!!errors.emergencyContactNumber}
                feedback={errors.emergencyContactNumber}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CCard className="notrounded">
                <CCardHeader>
                  <CCardTitle className="text-center txt-style">DEPARTMENT AND COURSE</CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    {departments.map((dep) => (
                      <CCol key={dep.departmentId} sm={6} lg={6} className="mb-2">
                        <CFormCheck
                          checked={
                            form.department && form.department.departmentId === dep.departmentId
                              ? true
                              : false
                          }
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
                                checked={
                                  form.course && form.course.courseId === crs.courseId
                                    ? true
                                    : false
                                }
                                value={crs}
                                name="course"
                                type="radio"
                                label={crs.courseTitle}
                                onChange={(e) => handleChangeDep(e, crs, 'course')}
                              />
                              <CCard className="notrounded my-2">
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
          <CRow className="d-flex justify-content-center p-3">
            <CButton type="submit" disabled={isFormInvalid()} className="btn-color">
              SUBMIT
            </CButton>
          </CRow>
        </CCardFooter>
      </CCard>
    </CForm>
  )
}

export default StudentForm
