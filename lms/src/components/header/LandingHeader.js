import React, { useState, useEffect } from 'react'
import 'src/scss/_landing.scss'
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
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CDropdownDivider,
} from '@coreui/react'
import { FaBars, FaUserTie, FaUserGraduate } from 'react-icons/fa'
import { RiAdminFill, RiParentFill, RiArrowDownSFill } from 'react-icons/ri'
// import { MdOutlineMenu } from 'react-icons/md'
import logo from 'src/assets/images/ABCUlogo.png'
import { animateScroll as scroll } from 'react-scroll'
import PropTypes from 'prop-types'

const LandingHeader = ({ toggle }) => {
  const [ismenuOpen, setIsmenuOpen] = useState(false)
  // const [isadmissionOpen, setIsadmissionOpen] = useState(false)
  // const [isaboutOpen, setIsaboutOpen] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)
  const [visible, setVisible] = useState(false)
  const toggling = () => setIsmenuOpen(!ismenuOpen)
  // const toggleadmission = () => setIsadmissionOpen(!isadmissionOpen)
  // const toggleabout = () => setIsaboutOpen(!isaboutOpen)

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
          <CNavbar expand="lg">
            <CContainer fluid>
              <NavLogo src={logo} alt="logo" onClick={toggleHome} />
              <CNavbarToggler
                aria-label="Toggle navigation"
                aria-expanded={visible}
                onClick={() => setVisible(!visible)}
              />
              <CCollapse className="navbar-collapse" visible={visible}>
                <CNavbarNav className="padleft">
                  {/* About ABC Dropdown */}
                  <CDropdown variant="nav-item" popper={false}>
                    <NavLinks
                      to="about"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-60}
                    >
                      <CDropdownToggle className="landingadjust">About ABC</CDropdownToggle>
                    </NavLinks>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownDivider />
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                  {/* End of About ABC Dropdown */}
                  {/* Start of Admission Dropdown */}
                  <NavItem>
                    <CDropdown variant="nav-item" popper={false}>
                      <NavLinks
                        to="apply"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-60}
                      >
                        <CDropdownToggle className="adjustadmin">Admission</CDropdownToggle>
                      </NavLinks>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </NavItem>
                  {/* End of Admission Dropdown */}
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
                    <NavLinks
                      to="news"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-40}
                    >
                      University News
                    </NavLinks>
                  </NavItem>

                  <div className="d-flex align-items-center">
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
                  </div>
                </CNavbarNav>
              </CCollapse>
            </CContainer>
          </CNavbar>
          {/* <NavLogo src={logo} alt="logo" onClick={toggleHome} />
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
          </NavMenu> */}
        </NavbarContainer>
      </NavHead>
    </>
  )
}

LandingHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
}

export default LandingHeader
