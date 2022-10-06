import React from 'react'

import { FaBars, FaUserTie, FaUserGraduate } from 'react-icons/fa'
import { RiAdminFill, RiParentFill, RiArrowDownSFill } from 'react-icons/ri'
import logo from 'src/assets/images/ABCUlogo.png'
import { animateScroll as scroll } from 'react-scroll'

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
                      <ListItem>Vision, Mision, Core Values, Strategic Goals</ListItem>
                      <ListItem>Contact Us</ListItem>
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
                      <ListItem>Admission Procedure</ListItem>
                      <ListItem>Enrollment Procedure For Freshmen Students</ListItem>
                      <ListItem>Estimated Tuition Fee</ListItem>
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
                        <FaUserGraduate style={{ marginBottom: '2px' }} />
                        &nbsp;&nbsp;Student
                      </ListItem>
                      <ListItem>
                        <FaUserTie style={{ marginBottom: '2px' }} />
                        &nbsp;&nbsp;Faculty
                      </ListItem>
                      <ListItem>
                        <RiParentFill style={{ marginBottom: '2px' }} />
                        &nbsp;&nbsp;Parent
                      </ListItem>
                      <ListItem>
                        <RiAdminFill style={{ marginBottom: '2px' }} />
                        &nbsp;&nbsp;Administrator
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

export default LandingHeader
