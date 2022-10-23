import React from 'react'
import 'src/scss/_profile.scss'

const StudentProfileForm = ({ studentInfo, type }) => {
  const fullname = `${studentInfo.firstName} ${studentInfo.middleName} ${studentInfo.lastName}`

  const date = new Date(studentInfo.birthDate)
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
  const userType = () => {
    if (type === 'parent') {
      return <div className="col-md-12 comp-title pt-3">MY STUDENT PROFILE</div>
    } else if (type === 'student') {
      return <div className="col-md-12 comp-title pt-3">MY PROFILE</div>
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">{userType()}</div>
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
                <p className="mb-0 fw-bold txt-color">FULL NAME</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{fullname}</p>
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
            </div>
            <hr className="pb-4" />
            <hr />
            <div className="row row-title">
              <div className="col-sm-12">
                <p className="mb-0 fw-bold card-title txt-color">COURSE INFORMATION</p>
              </div>
            </div>
            <hr className="pb-4" />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">PROGRAM</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{studentInfo.department.departmentName}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">COURSE</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{studentInfo.course.courseTitle}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">STATUS</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{studentInfo.status}</p>
              </div>
            </div>
            <hr className="pb-4" />
            <hr />
            <div className="row row-title">
              <div className="col-sm-12">
                <p className="mb-0 fw-bold card-title txt-color">EMERGENCY CONTACT INFORMATION</p>
              </div>
            </div>
            <hr className="pb-4" />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">CONTACT PERSON</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{studentInfo.emergencyContactPerson}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <p className="mb-0 fw-bold txt-color">CONTACT NUMBER</p>
              </div>
              <div className="col-sm-8">
                <p className="mb-0">{studentInfo.emergencyContactNumber}</p>
              </div>
            </div>
            <hr />
            <div className="row"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentProfileForm
