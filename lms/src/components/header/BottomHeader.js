import React, { useState, useEffect } from 'react'
import 'src/scss/_landing.scss'
import {
  NavHead,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  Link,
  PublicLink,
} from 'src/styles/LandingHeader.styles'
import { FaBars, FaTimes } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'
import logo from 'src/assets/images/ABCwhite.png'
import { animateScroll as scroll } from 'react-scroll'
import { AboutABCItems, AdmissionItems } from './LandingMenuItems'
import AccessDropdown from './AccessDropdown'

const LandingHeader = () => {
  const [click, setClick] = useState(false)

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => {
    setClick(false)
  }

  const mobileMenu = () => {
    closeMobileMenu()
    toggleHome()
  }

  return (
    <>
      <NavHead className="transparent">
        <NavbarContainer>
          <NavLogo src={logo} alt="logo" onClick={mobileMenu} />
          <MobileIcon onClick={handleClick} smooth={true} duration={500} style={{ color: 'white' }}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <NavItem className="nav-dropdown">
              <div className="bottomcolor">
                About ABC <RiArrowDownSFill className="drpnone" />
              </div>
              <div className="nav-dropdown-content">
                <ul className="drpdownlist">
                  {AboutABCItems.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </NavItem>
            <NavItem className="nav-dropdown">
              <div className="bottomcolor">
                Admission <RiArrowDownSFill className="drpnone" />
              </div>
              <div className="nav-dropdown-content">
                <ul className="drpdownlist">
                  {AdmissionItems.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </NavItem>
            <NavItem>
              <PublicLink to="/programs">Programs</PublicLink>
            </NavItem>
            <NavItem>
              <PublicLink to="/campus-life">Campus Life</PublicLink>
            </NavItem>
            <NavItem>
              <PublicLink to="/latest-news">University News</PublicLink>
            </NavItem>
            <NavItem>
              <AccessDropdown />
            </NavItem>
          </ul>
        </NavbarContainer>
      </NavHead>
    </>
  )
}

export default LandingHeader
