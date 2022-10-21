import Joi from 'joi'
import React, { useState } from 'react'
import 'src/scss/_profile.scss'
import camelCaseToWords from '../../services/lodashService'
import { updateAdmin } from '../../services/adminService'
import { toast } from 'react-toastify'

const AdminProfileForm = ({ adminInfo }) => {
  const name = `${adminInfo.firstName} ${adminInfo.lastName}`
  const [toggleInput, setToggleInput] = useState(false)
  const [form, SetForm] = useState({
    firstName: adminInfo.firstName,
    lastName: adminInfo.lastName,
    username: adminInfo.username,
    password: '',
    confirm: '',
  })

  const [errors, setErrors] = useState({})

  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().min(7).allow('').optional().required(),
    confirm: Joi.string()
      .allow('')
      .optional()
      .required()
      .custom((value, helper) => {
        if (value !== form.password) {
          return helper.message('password does not match!')
        } else {
          return true
        }
      }),
  })
  const handleChange = (e) => {
    e.preventDefault()
    SetForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })

    const { error } = schema
      .extract(e.currentTarget.name)
      .label(camelCaseToWords(e.currentTarget.name))
      .validate(e.currentTarget.value)

    if (error) {
      setErrors({ ...errors, [e.currentTarget.name]: error.details[0].message })
    } else {
      delete errors[e.currentTarget.name]
      setErrors(errors)
    }
  }

  const handleEdit = () => {
    setToggleInput(!toggleInput)
  }

  const formIsValid = () => {
    const result = schema.validate(form)
    return !!result.error
  }

  const handleSubmit = () => {
    const data = { ...form, admin_id: adminInfo.admin_id }
    delete data.confirm
    updateAdmin(data).then((res) => {
      console.log(res)
      if (res.data && res.data.status === 1) {
        localStorage.setItem('lms', JSON.stringify(res.data))
        toast.success(res.data.message)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })

    setToggleInput(false)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 comp-title pt-3">MY PROFILE</div>
      </div>
      <div className="card profile-card justify-content-center m-4">
        <div className="card-header d-flex justify-content-end">
          <button className="btn btn-default" onClick={handleEdit}>
            {toggleInput ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div className="card-body">
          <hr />
          <div className="row row-title">
            <div className="col-sm-12">
              <p className="mb-0 fw-bold card-title txt-color">PERSONAL INFORMATION</p>
            </div>
          </div>
          <hr className="pb-4" />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">{toggleInput ? 'FIRSTNAME' : 'NAME'}</p>
            </div>
            <div className="col-sm-8">
              {toggleInput ? (
                <div>
                  <input
                    className="form-control"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  {!!errors.firstName && (
                    <span className="text-danger">
                      <small>{errors.firstName}</small>
                    </span>
                  )}
                </div>
              ) : (
                <p className="mb-0">{name}</p>
              )}
            </div>
          </div>
          <hr />
          {toggleInput && (
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">LASTNAME</p>
              </div>
              <div className="col-sm-8">
                {toggleInput ? (
                  <div>
                    <input
                      className="form-control"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                    {!!errors.lastName && (
                      <span className="text-danger">
                        <small>{errors.lastName}</small>
                      </span>
                    )}
                  </div>
                ) : (
                  <p className="mb-0">{name}</p>
                )}
              </div>
            </div>
          )}
          <hr className="pb-4" />
          <hr />
          <div className="row row-title">
            <div className="col-sm-12">
              <p className="mb-0 fw-bold card-title txt-color">ACCOUNT INFORMATION</p>
            </div>
          </div>
          <hr className="pb-4" />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">USERNAME</p>
            </div>
            <div className="col-sm-8">
              {toggleInput ? (
                <div>
                  <input
                    className="form-control"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                  />
                  {!!errors.username && (
                    <span className="text-danger">
                      <small>{errors.username}</small>
                    </span>
                  )}
                </div>
              ) : (
                <p className="mb-0">{adminInfo.username}</p>
              )}
            </div>
          </div>
          <hr />
          {toggleInput && (
            <>
              <div className="row">
                <div className="col-sm-4">
                  <p className="mb-0 fw-bold txt-color">PASSWORD</p>
                </div>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                  {!!errors.password && (
                    <span className="text-danger">
                      <small>{errors.password}</small>
                    </span>
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-4">
                  <p className="mb-0 fw-bold txt-color">CONFIRM PASSWORD</p>
                </div>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                  />
                  {!!errors.confirm && (
                    <span className="text-danger">
                      <small>{errors.confirm}</small>
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
          <hr />
          <div className="row"></div>
        </div>
        {toggleInput && (
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-success" disabled={formIsValid()} onClick={handleSubmit}>
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminProfileForm
