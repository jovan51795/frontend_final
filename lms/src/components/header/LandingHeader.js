import React, { useState, useEffect } from 'react'
import {
  NavHead,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  SCTAButton,
  DropDownContainer,
  DropDownContainer2,
  DropDownListContainer,
  DropDownListContainer2,
  DropDownList,
  DrpdownLink,
  ListItem,
  Link,
} from 'src/styles/LandingHeader.styles'
import { FaBars, FaUserTie, FaUserGraduate } from 'react-icons/fa'
import { RiAdminFill, RiParentFill, RiArrowDownSFill } from 'react-icons/ri'
import logo from 'src/assets/images/ABCUlogo.png'
import { animateScroll as scroll } from 'react-scroll'
import PropTypes from 'prop-types'

const LandingHeader = ({ toggle }) => {
  const [ismenuOpen, setIsmenuOpen] = useState(false)
  const [isadmissionOpen, setIsadmissionOpen] = useState(false)
  const [isaboutOpen, setIsaboutOpen] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const toggling = () => setIsmenuOpen(!ismenuOpen)
  const toggleadmission = () => setIsadmissionOpen(!isadmissionOpen)
  const toggleabout = () => setIsaboutOpen(!isaboutOpen)

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

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <NavHead scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo src={logo} alt="logo" onClick={toggleHome} />
          <MobileIcon onClick={toggle} smooth={true} duration={500}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <DropDownContainer2>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                  onClick={toggleabout}
                >
                  About ABC <RiArrowDownSFill />
                </NavLinks>
                {isaboutOpen && (
                  <DropDownListContainer2>
                    <DropDownList>
                      <Link to="/about/vision-mission-core-values-strategic-goals">
                        <ListItem>Vision, Mision, Core Values, Strategic Goals</ListItem>
                      </Link>
                      <Link to="/about/contact-us">
                        <ListItem>Contact Us</ListItem>
                      </Link>
                    </DropDownList>
                  </DropDownListContainer2>
                )}
              </DropDownContainer2>
            </NavItem>
            <NavItem>
              <DropDownContainer2>
                <NavLinks
                  to="apply"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                  onClick={toggleadmission}
                >
                  Admission <RiArrowDownSFill />
                </NavLinks>
                {isadmissionOpen && (
                  <DropDownListContainer2>
                    <DropDownList>
                      <Link to="/admission/admission-procedures">
                        <ListItem>Admission Procedure</ListItem>
                      </Link>
                      <Link to="/admission/enrollment-procedure">
                        <ListItem>Enrollment Procedure For Freshmen Students</ListItem>
                      </Link>
                      <Link to="/admission/estimated-tuition-fees">
                        <ListItem>Estimated Tuition Fee</ListItem>
                      </Link>
                    </DropDownList>
                  </DropDownListContainer2>
                )}
              </DropDownContainer2>
            </NavItem>
            <NavItem>
              <NavLinks
                to="programs"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-60}
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
              >
                Campus Life
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="news" smooth={true} duration={500} spy={true} exact="true" offset={-40}>
                University News
              </NavLinks>
            </NavItem>
            <NavItem>
              <DropDownContainer>
                <SCTAButton onClick={toggling}>
                  <FaBars style={{ marginBottom: '4px' }} />
                  &nbsp;&nbsp;Access Modules
                </SCTAButton>
                {ismenuOpen && (
                  <DropDownListContainer>
                    <DropDownList>
                      <ListItem>
                        <DrpdownLink to="/login/student">
                          <FaUserGraduate style={{ marginBottom: '2px' }} />
                          &nbsp;&nbsp;Student
                        </DrpdownLink>
                      </ListItem>
                      <ListItem>
                        <DrpdownLink to="/login/faculty">
                          <FaUserTie style={{ marginBottom: '2px' }} />
                          &nbsp;&nbsp;Faculty
                        </DrpdownLink>
                      </ListItem>
                      <ListItem>
                        <DrpdownLink to="/login/parent">
                          <RiParentFill style={{ marginBottom: '2px' }} />
                          &nbsp;&nbsp;Parent
                        </DrpdownLink>
                      </ListItem>
                      <ListItem>
                        <DrpdownLink to="/login/admin">
                          <RiAdminFill style={{ marginBottom: '2px' }} />
                          &nbsp;&nbsp;Administrator
                        </DrpdownLink>
                      </ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </NavHead>
    </>
  )
}

LandingHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
}

export default LandingHeader
