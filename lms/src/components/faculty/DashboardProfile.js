import React from 'react'
import 'src/scss/dbfacultyprofile.scss'

const DashboardProfile = () => {
  return (
    <div className="container mt-3 mb-3">
      <div className="row no-gutters">
        <div className="col-md-4 col-lg-4">
          <img
            className="dbpfimg"
            src="https://cdn1.iconfinder.com/data/icons/back-to-school-217/64/headmaster-avatar-professor-teacher-education-1024.png"
          />
        </div>
        <div className="col-md-8 col-lg-8">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-blue text-white">
              <h3 className="display-5">Amelly Anderson</h3>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-google"></i>
              <i className="fa fa-youtube-play"></i>
              <i className="fa fa-dribbble"></i>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className="p-3 bg-black text-white">
              <h6>College of Computer Sciences Faculty</h6>
            </div>
            <div className="d-flex flex-row text-white" style={{ justifyContent: 'space-between' }}>
              <div className="p-3 text-dark text-center ">
                <h4>1000</h4>
                <h6>Students</h6>
              </div>
              <div className="p-3 text-dark text-center ">
                <h4>300</h4>
                <h6>Pending Evaluation</h6>
              </div>
              <div className="p-3 text-dark text-center ">
                <h4>80%</h4>
                <h6>Evaluation Rating</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardProfile
