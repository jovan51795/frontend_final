import React, { useState, useEffect } from 'react'
import 'src/scss/_landing.scss'
import {
  NavHead,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  Link,
} from 'src/styles/LandingHeader.styles'
import { FaBars, FaTimes } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'
import '../../scss/_landing.scss'
import blogo from 'src/assets/images/ABCUlogo.png'
import { animateScroll as scroll } from 'react-scroll'
import { AboutABCItems, AdmissionItems } from './LandingMenuItems'
import AccessDropdown from './AccessDropdown'

const LandingHeader = ({ lightcolor }) => {
  const [click, setClick] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

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

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <NavHead scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo src={blogo} alt="blogo" onClick={mobileMenu} />
          <MobileIcon onClick={handleClick} smooth={true} duration={500}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <NavItem className="nav-dropdown">
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
                className="nav-dropbtn"
                lightcolor={lightcolor}
                // onClick={closeMobileMenu}
              >
                About ABC <RiArrowDownSFill className="drpnone" />
              </NavLinks>
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
              <NavLinks
                to="apply"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
                className="nav-dropbtn"
                lightcolor={lightcolor}
                // onClick={closeMobileMenu}
              >
                Admission <RiArrowDownSFill className="drpnone" />
              </NavLinks>
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
              <NavLinks
                to="programs"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
                lightcolor={lightcolor}
              >
                Programs
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="campus"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-45}
                lightcolor={lightcolor}
              >
                Campus Life
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="news"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-40}
                lightcolor={lightcolor}
              >
                University News
              </NavLinks>
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
