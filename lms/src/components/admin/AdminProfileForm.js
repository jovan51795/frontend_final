import React from 'react'
import 'src/scss/_profile.scss'

const AdminProfileForm = ({ adminInfo }) => {
  const name = `${adminInfo.firstName} ${adminInfo.lastName}`
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 comp-title pt-3">MY PROFILE</div>
      </div>
      <div className="card profile-card justify-content-center m-4">
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
              <p className="mb-0">{name}</p>
            </div>
          </div>
          {/* <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">BIRTHDATE</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{birthDate}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">MOBILE NUMBER</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{studentInfo.mobileNumber}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">ADDRESS</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{studentInfo.address}</p>
              </div>
            </div> */}
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
              <p className="mb-0">{adminInfo.username}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 fw-bold txt-color">PASSWORD</p>
            </div>
            <div className="col-sm-8">
              <p className="mb-0">{adminInfo.password}</p>
            </div>
          </div>
          <hr />
          <div className="row"></div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfileForm
