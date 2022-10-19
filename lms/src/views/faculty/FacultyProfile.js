import React from 'react'
import 'src/scss/facultyprofile.scss'
import { Btn } from 'src/styles/Btn.styles.'
import { getUserInfo } from 'src/services/userInfo'

const FacultyProfile = () => {
  const user = getUserInfo()
  const fullname = `${user.object.firstName} ${user.object.lastName}`

  return (
    // <div className="col-lg-8">
    <div className="container">
      <div className="row">
        <div className="col-md-12 comp-title">MY PROFILE</div>
      </div>
      <div className="card profile-card m-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">FULL NAME</p>
            </div>
            <div className="col-sm-8">
              <p className="mb-0">{fullname}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">GENDER</p>
            </div>
            <div className="col-sm-8">
              <p className="mb-0">{user.object.gender}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">BIRTHDATE</p>
            </div>
            <div className="col-sm-8">
              <p className="mb-0">{user.object.birthdate}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">POSITION</p>
            </div>
            <div className="col-sm-8">
              <p className="mb-0">{user.object.work}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">STATUS</p>
            </div>
            <div className="col-sm-8">
              <p className="mb-0">{user.object.status}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">MOBILE</p>
            </div>
            <div className="col-sm-8">
              <p className="mb-0">(098) 765-4321</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">ADDRESS</p>
            </div>
            <div className="col-sm-8">
              <p className="mb-0">Bay Area, San Francisco, CA</p>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
      <div className="col-md-12 my-0 prof-edit">
        <Btn big="true" to="/faculty/profile/edit" className="btn-edit">
          EDIT PROFILE
        </Btn>
      </div>
    </div>
  )
}

export default FacultyProfile
