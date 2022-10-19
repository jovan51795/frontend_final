import React from 'react'
import 'src/scss/_profile.scss'
import { getUserInfo } from 'src/services/userInfo'

const FacultyProfile = () => {
  const user = getUserInfo()
  const fullname = `${user.object.firstName} ${user.object.lastName}`
  const date = new Date(user.object.birthdate)
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][date.getMonth()]
  const birthDate = month + ' ' + date.getDate() + ', ' + date.getFullYear()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 comp-title pt-3">MY PROFILE</div>
      </div>
      <div className="card profile-card m-4">
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
              <p className="mb-0 fw-bold txt-color">NAME</p>
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
              <p className="mb-0">{birthDate}</p>
            </div>
          </div>
          <hr className="pb-4" />
          <hr />
          <div className="row row-title">
            <div className="col-sm-12">
              <p className="mb-0 fw-bold card-title txt-color">WORK INFORMATION</p>
            </div>
          </div>
          <hr className="pb-4" />
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
          <div className="row"></div>
        </div>
      </div>
    </div>
  )
}

export default FacultyProfile
