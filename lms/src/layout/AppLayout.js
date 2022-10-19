import React, { useState } from 'react'
import 'src/scss/_newheader.scss'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineMenu } from 'react-icons/md'
import ABClogo from 'src/assets/images/ABCLogoforDashboard.png'
import logo from 'src/assets/images/ABCwhitelogo.png'
import AppBreadcrumb from '../components/AppBreadcrumb'
import SidebarGrid from '../components/sidebar/SidebarGrid'
import AppContent from '../components/AppContent'
import { getUserInfo } from '../services/userInfo'
import * as authService from 'src/services/auth'
import { Link } from 'react-router-dom'

const AppLayout = () => {
  const date = new Date()
  const today = date.getDay()
  const userInFo = getUserInfo()
  const type = userInFo.object.type
  const [setAccessToken] = useState(authService.getAccessToken())

  const handleLogout = () => {
    authService.logout()
    setAccessToken(null)
    alert('Goodbye for now!')
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12" style={{ backgroundColor: '#022135', color: 'white' }}>
          {/* Start of Top Header */}
          <nav className="navbar navbar-expand-lg top-bar">
            <div className="container-fluid">
              <a className="navbar-brand top-bar" href="#">
                <img src={logo} height="15" alt="ABC Logo" loading="lazy" />
              </a>
              <div>
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
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <MdOutlineMenu style={{ color: '#022135' }} />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
                <span className="navbar-text text-white">ACADEMICS&nbsp;&nbsp;</span>|
                <span className="navbar-text text-white">&nbsp;&nbsp;NEWS&nbsp;&nbsp;</span>|
                <span className="navbar-text text-white">&nbsp;&nbsp;CONTACT US&nbsp;&nbsp;</span>
              </div>
            </div>
          </nav>
          {/* End of Top Header */}
        </div>
        {/* End of Grid for Top Header */}
      </div>
      <div className="container">
        {/*Start of Container */}
        <div className="row">
          {/*Start of Main Header*/}
          <div className="col-md-6 py-3 header-logo">
            <Link to="/">
              <img src={ABClogo} alt="ABC Logo" />
            </Link>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3 navbar-right pt-5">
            <form className="d-flex input-group w-auto pr-1">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0 search" id="search-addon">
                <FaSearch />
              </span>
            </form>
          </div>
        </div>
        {/*End of Main Header*/}
        <div className="row">
          <div className="col-md-12 py-2 pb-5">
            <AppBreadcrumb />
          </div>
        </div>
        {/*End of BreadCrumb*/}
        <div className="row">
          {/*Start of Sidebar*/}
          <div className="col-md-3">
            <SidebarGrid onLogout={handleLogout} />
          </div>
          <div className="col-md-9 px-0">
            <div className="title">WELCOME {userInFo && type.toUpperCase()} </div>
            <hr style={{ border: '0.75px solid black' }} />
            <div className="row mx-0">
              <div className="col-md-12">
                <AppContent />
              </div>
            </div>
          </div>
        </div>
        {/*Start of Sidebar*/}
      </div>
    </>
  )
}

export default AppLayout
