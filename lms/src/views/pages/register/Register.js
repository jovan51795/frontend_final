import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
} from '@coreui/react'

import { useDispatch, useSelector } from 'react-redux'
import Joi from 'joi'

import { adminRegister } from '../../../redux/actions/adminAuthActions'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  useSelector((state) => {
    if (state && state.adminAuth && state.adminAuth.payload === 1) {
      navigate('/login/admin')
    }
  })
  const [adminForm, setadminForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    type: 'Admin',
  })
  const [errors, seterrors] = useState({})
  const dispatch = useDispatch()

  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string().required(),
  })

  const handleOnChange = (e) => {
    e.preventDefault()
    setadminForm({
      ...adminForm,
      [e.currentTarget.name]: e.currentTarget.value,
    })

    const { error } = schema
      .extract(e.currentTarget.name)
      .label(e.currentTarget.name)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(adminRegister(adminForm))
  }
  const isFormInvalid = () => {
    const result = schema.validate(adminForm)
    return !!result.error
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="First Name"
                      name="firstName"
                      value={adminForm.firstName}
                      onChange={handleOnChange}
                      invalid={!!errors.firstName}
                      feedback={errors.firstName}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="Last Name"
                      name="lastName"
                      value={adminForm.lastName}
                      onChange={handleOnChange}
                      invalid={!!errors.lastName}
                      feedback={errors.lastName}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="Username"
                      name="username"
                      value={adminForm.username}
                      onChange={handleOnChange}
                      invalid={!!errors.username}
                      feedback={errors.username}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={adminForm.password}
                      onChange={handleOnChange}
                      invalid={!!errors.password}
                      feedback={errors.password}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type="submit" disabled={isFormInvalid()}>
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
