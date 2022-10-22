import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import 'src/scss/_login.scss'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Joi from 'joi'
import Header from 'src/components/header/Header'
import { AppFooter } from 'src/components'
import { adminLogin, professorLogin, studentLogin, parentLogin } from '../../../services/auth'
import { toast } from 'react-toastify'

const Login = () => {
  const param = useParams()
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })

  const handleOnChange = (event) => {
    event.preventDefault()
    setLoginForm({
      ...loginForm,
      [event.currentTarget.name]: event.currentTarget.value,
    })

    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name)
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

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (param.type === 'student') {
      studentLogin(loginForm).then((res) => {
        redirect(res.data)
      })
    } else if (param.type === 'admin') {
      adminLogin(loginForm).then((res) => {
        redirect(res.data)
      })
    } else if (param.type === 'faculty') {
      professorLogin(loginForm).then((res) => {
        redirect(res.data)
      })
    } else if (param.type === 'parent') {
      parentLogin(loginForm).then((res) => {
        redirect(res.data)
      })
    }
  }
  const redirect = (data) => {
    if (data && data.status === 1) {
      localStorage.setItem('lms', JSON.stringify(data))
      navigate(`/${param.type}/dashboard`)
    } else {
      toast.error(data.message)
    }
  }

  const isFormInvalid = () => {
    const result = schema.validate(loginForm)
    return !!result.error
  }
  return (
    <>
      <Header />
      <div className=" d-flex flex-row align-items-center mt-4">
        <CContainer className="mb-4">
          <CRow className="justify-content-center">
            <CCol lg={6} md={10} sm={11}>
              {/* <CCardGroup> */}
              <CCard className="p-4 no-border">
                <CCardBody>
                  <CForm
                    className="row needs-validation text-center"
                    onSubmit={handleOnSubmit}
                    noValidate
                  >
                    <h1 className="login-title">{param.type.toUpperCase()} LOGIN</h1>
                    <p className="text-medium-emphasis">SIGN IN TO YOUR ACCOUNT</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        name="username"
                        value={loginForm.username}
                        onChange={handleOnChange}
                        invalid={!!errors.username}
                        feedback={errors.username}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleOnChange}
                        invalid={!!errors.password}
                        feedback={errors.password}
                        autoComplete="true"
                      />
                    </CInputGroup>
                    <div className="container">
                      <CRow className="login-flex">
                        <CCol md={11} xs={10}>
                          <CButton
                            type="submit"
                            disabled={isFormInvalid()}
                            className="login-btn w-100"
                          >
                            LOG IN
                          </CButton>
                        </CCol>
                      </CRow>
                      <CRow className="login-flex ">
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className=" px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <AppFooter />
    </>
  )
}

export default Login
