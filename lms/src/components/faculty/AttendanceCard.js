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
import { IoIosArrowBack } from 'react-icons/io'
import { Btn } from 'src/styles/Btn.styles.'
import 'src/scss/_faculty.scss'

const AttendanceCard = ({ student, onSubmit }) => {
  const date = new Date()
  const today = date.getDay()
  const [attendance, setAttendance] = useState({
    isPresent: false,
  })

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
          <CCardHeader className="fs-5 fw-bold text-center">ATTENDANCE CARD</CCardHeader>
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
                  <CCol md={9} sm={8} className="fw-bold">
                    {student[3].toUpperCase()}, {student[1].toUpperCase()}{' '}
                    {student[2].toUpperCase()}
                  </CCol>
                </CRow>
              </CListGroupItem>
              <CListGroupItem>
                <CRow>
                  <CCol sm={12} className="text-center py-3 txt-style">
                    Current Date: &ensp;
                    {(() => {
                      switch (today) {
                        case 1:
                          return 'Monday'
                        case 2:
                          return 'Tuesday'
                        case 3:
                          return 'Wednesday'
                        case 4:
                          return 'Thursday'
                        case 5:
                          return 'Friday'
                        case 6:
                          return 'Saturday'
                        default:
                          return 'Sunday'
                      }
                    })()}
                    ,&nbsp;{date.toLocaleString()}
                  </CCol>
                </CRow>
                <CForm onSubmit={handleSubmit}>
                  <CRow className="d-flex justify-content-center">
                    <CFormLabel className="txt-head py-1 fs-5">Attendance onLogout:</CFormLabel>
                    <CCol></CCol>
                    <CCol>
                      <CFormCheck
                        name="isPresent"
                        type="radio"
                        value={true}
                        label="PRESENT"
                        onChange={handleOnChange}
                        className="fs-5 fw-bold py-3"
                        style={{ color: 'green' }}
                      />
                    </CCol>
                    <CCol>
                      <CFormCheck
                        name="isPresent"
                        type="radio"
                        value={false}
                        label="ABSENT"
                        onChange={handleOnChange}
                        className="fs-5 fw-bold py-3"
                        style={{ color: 'red' }}
                      />
                    </CCol>
                    <CCol></CCol>
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
              </CListGroupItem>
            </CListGroup>
          ))}
        </CCard>
        <CRow>
          <CContainer className="py-4">
            <Btn big="true" to="/faculty/classes">
              <IoIosArrowBack className="a-icon" /> BACK
            </Btn>
          </CContainer>
        </CRow>
      </CContainer>
    </>
  )
}

export default AttendanceCard
