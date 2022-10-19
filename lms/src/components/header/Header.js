import React, { useState } from 'react'
// import {
//   CNavbar,
//   CContainer,
//   CCollapse,
//   CNavbarToggler,
//   CNavbarBrand,
//   CNavbarNav,
//   CNavLink,
//   CButton,
//   CNavItem,
// } from '@coreui/react'
import 'src/scss/_newheader.scss'
import 'src/scss/_landing.scss'
import logo from 'src/assets/images/ABCwhitelogo.png'
import ABClogo from 'src/assets/images/whitelogo.png'
import BottomHeader from './BottomHeader'

const Header = () => {
  const date = new Date()
  const today = date.getDay()

  return (
    <>
      <div className="row">
        <div
          className="col-md-12"
          style={{ backgroundColor: '#022135 !important', color: 'white' }}
        >
          {/* Start of Top Header */}
          <nav className="navbar navbar-expand-lg top-bar">
            <div className="container-fluid">
              <a className="navbar-brand top-bar" href="#">
                <img src={logo} height="15" alt="ABC Logo" loading="lazy" />
              </a>
              <div className="date">
                Today is{' '}
                {(() => {
                  switch (today) {
                    case 1:
                      return 'Monday'
                    case 2:
                      return 'Tuesday'
                    case 3:
                      return 'Wednesday'
                    case 4:
                      return 'Thursday'
                    case 5:
                      return 'Friday'
                    case 6:
                      return 'Saturday'
                    default:
                      return 'Sunday'
                  }
                })()}
                ,&nbsp;{date.toLocaleString()}
              </div>
              {/* <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <MdOutlineMenu style={{ color: 'white' }} />
              </button> */}
              <div className="collapse navbar-collapse" id="navbarText">
                <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
                <span className="navbar-text text-white">ACADEMICS&nbsp;&nbsp;</span>|
                <span className="navbar-text text-white">&nbsp;&nbsp;NEWS&nbsp;&nbsp;</span>|
                <span className="navbar-text text-white">&nbsp;&nbsp;CONTACT US&nbsp;&nbsp;</span>
              </div>
            </div>
          </nav>{' '}
          {/* End of Top Header */}
        </div>{' '}
        {/* End of Grid for Top Header */}
      </div>
      {/* Second Row*/}
      <div className="container-fluid banner">
        <div className="row">
          {' '}
          {/*Start of Main Header*/}
          <div className="col-md-12 public logo-center">
            <a href="/">
              <img src={ABClogo} alt="ABC Logo" />
            </a>
          </div>
          <div className="row whitish">
            <div className="col-md-12 whitish"></div>
          </div>
          <div className="head">
            <BottomHeader />
          </div>
        </div>
      </div>
      <div className="row divider">
        <div className="col-md-12"></div>
      </div>
    </>
  )
}

export default Header
