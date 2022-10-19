import React, { useState } from 'react'
import 'src/scss/facultyprofile.scss'
import { Btn } from 'src/styles/Btn.styles.'
import Joi from 'joi'

const EditFacultyProfile = ({ onSubmit, initialValue }) => {
  const [form, setForm] = useState(
    // initialValue ||
    {
      firstName: '',
      lastName: '',
      gender: '',
      birthdate: '',
      work: '',
      status: '',
    },
  )

  const [errors, setErrors] = useState({})

  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    gender: Joi.string().optional(),
    birthdate: Joi.string().required(),
    work: Joi.string().required(),
    status: Joi.string().optional(),
  })

  const handleChange = (event) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value })

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

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(form)
  }

  const isFormInvalid = () => {
    const result = schema.validate(form)
    return !!result.error
  }

  return (
    <div className="container rounded bg-white mt-5 mb-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">First Name</label>
                <input type="text" className="form-control" placeholder="First Name" value="" />
              </div>
              <div className="col-md-6">
                <label className="labels">Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" value="" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Gender</label>
                <input type="text" className="form-control" placeholder="Gender" value="" />
                <br />
              </div>
              <div className="col-md-12">
                <label className="labels">Birthdate</label>
                <input type="text" className="form-control" placeholder="Gender" value="" />
                <br />
              </div>
              <div className="col-md-12">
                <label className="labels">Position</label>
                <input type="text" className="form-control" placeholder="Education" value="" />
                <br />
              </div>
              <div className="col-md-12">
                <label className="labels">Status</label>
                <input type="text" className="form-control" placeholder="Status" value="" />
                <br />
              </div>
              {/* <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input type="text" className="form-control" placeholder="Mobile Number" value="" />
                <br />
              </div>
              <div className="col-md-12">
                <label className="labels">Address</label>
                <input type="text" className="form-control" placeholder="Address" value="" />
              </div> */}
            </div>
            <div className="mt-5 text-center">
              <Btn big="true">Save Profile</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFacultyProfile
