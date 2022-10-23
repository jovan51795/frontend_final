import React, { useState } from 'react'
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
  CFormCheck,
  CFormLabel,
  CButton,
} from '@coreui/react'
import Joi from 'joi'

const AttendanceCard = ({ student, onSubmit }) => {
  const date = new Date()
  const [attendance, setAttendance] = useState({
    isPresent: false,
  })

  const present = true
  const absent = false

  const [errors, setErrors] = useState({})

  const schema = Joi.object({
    isPresent: Joi.boolean().required(),
  })

  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true
      if (value.toLowerCase() === 'false') return false
    }
    return value
  }

  const handleOnChange = (event) => {
    setAttendance({
      ...attendance,
      [event.currentTarget.name]: str2bool(event.currentTarget.value),
    })

    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name.toUpperCase())
      .validate(event.currentTarget.value)
    // console.log(typeof event.currentTarget.value)
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
    onSubmit(attendance)
  }

  const isFormInvalid = () => {
    const result = schema.validate(attendance)
    return !!result.error
  }

  console.log(attendance)
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>ATTENDANCE CARD</CCardHeader>
          {student?.map((student) => (
            <CListGroup flush key={student[0]}>
              <CListGroupItem>
                <CRow>
                  <CCol sm={6}>SUBJECT CODE:&nbsp;&nbsp; {student[6]}</CCol>
                  <CCol sm={6}>SUBJECT TITLE:&nbsp;&nbsp; {student[5].toUpperCase()}</CCol>
                </CRow>
              </CListGroupItem>
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
                  <CCol md={6} sm={6}>
                    Current Date: {date.toUTCString()}
                  </CCol>
                  <CCol md={6} sm={6}>
                    <CForm onSubmit={handleSubmit}>
                      <CRow>
                        <CFormLabel>Attendance</CFormLabel>
                        <CCol>
                          <CFormCheck
                            name="isPresent"
                            type="radio"
                            value={true}
                            label="Present"
                            onChange={handleOnChange}
                          />
                        </CCol>
                        <CCol>
                          <CFormCheck
                            name="isPresent"
                            type="radio"
                            value={false}
                            label="Absent"
                            onChange={handleOnChange}
                          />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol>
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
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCol>
                </CRow>
              </CListGroupItem>
            </CListGroup>
          ))}
        </CCard>
      </CContainer>
    </>
  )
}

export default AttendanceCard
