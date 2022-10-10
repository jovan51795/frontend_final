import React from 'react'
import 'src/scss/facultyprofile.scss'
import { Btn } from 'src/styles/Btn.styles.'

const EditFacultyProfile = () => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-4">
                <label className="labels">First Name</label>
                <input type="text" className="form-control" placeholder="First Name" value="" />
              </div>
              <div className="col-md-4">
                <label className="labels">Middle Name</label>
                <input type="text" className="form-control" placeholder="Middle Name" value="" />
              </div>
              <div className="col-md-4">
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
                <label className="labels">Status</label>
                <input type="text" className="form-control" placeholder="Status" value="" />
                <br />
              </div>
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input type="text" className="form-control" placeholder="Mobile Number" value="" />
                <br />
              </div>
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input type="text" className="form-control" placeholder="Email" value="" />
                <br />
              </div>
              <div className="col-md-12">
                <label className="labels">Education</label>
                <input type="text" className="form-control" placeholder="Education" value="" />
                <br />
              </div>
              <div className="col-md-12">
                <label className="labels">Address</label>
                <input type="text" className="form-control" placeholder="Address" value="" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input type="text" className="form-control" placeholder="Country" value="" />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input type="text" className="form-control" placeholder="State/Region" value="" />
              </div>
            </div>
            <div className="mt-5 text-center">
              <Btn big="true">Save Profile</Btn>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Edit Experience</span>
              <span className="border px-3 p-1 add-experience">
                <i className="fa fa-plus"></i>&nbsp;Experience
              </span>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Experience in Teaching</label>
              <input type="text" className="form-control" placeholder="Experience" value="" />
            </div>{' '}
            <br />
            <div className="col-md-12">
              <label className="labels">Additional Details</label>
              <input
                type="text"
                className="form-control"
                placeholder="Additional Details"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFacultyProfile
