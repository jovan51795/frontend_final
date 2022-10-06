import React from 'react'
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
} from 'src/styles/Sidebar.styles'
import PropTypes from 'prop-types'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <CDropdown>
            <CDropdownToggle color="secondary">About ABC</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

          {/* <SidebarLink>
              <SideDropDownContainer2>
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
                      <ListItem>
                        Vision, Mision, Core Values, Strategic Goals
                      </ListItem>
                      <ListItem>Contact Us</ListItem>
                    </DropDownList>
                  </DropDownListContainer2>
                )}
              </SideDropDownContainer2>
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="/login" onClick={toggle}>
              Login
            </SidebarLink> */}
          {/* </SidebarLink> */}
          {/* <SideDropDownContainer>
              <SideSCTAButton onClick={toggling}>
                <FaBars style={{ marginBottom: "4px" }} />
                &nbsp;&nbsp;Access Modules
              </SideSCTAButton>
              {ismenuOpen && (
                <SideDropDownListContainer>
                  <DropDownList>
                    <ListItem>
                      <FaUserGraduate style={{ marginBottom: "2px" }} />
                      &nbsp;&nbsp;Student
                    </ListItem>
                    <ListItem>
                      <FaUserTie style={{ marginBottom: "2px" }} />
                      &nbsp;&nbsp;Faculty
                    </ListItem>
                    <ListItem>
                      <RiParentFill style={{ marginBottom: "2px" }} />
                      &nbsp;&nbsp;Parent
                    </ListItem>
                    <ListItem>
                      <RiAdminFill style={{ marginBottom: "2px" }} />
                      &nbsp;&nbsp;Administrator
                    </ListItem>
                  </DropDownList>
                </SideDropDownListContainer>
              )}
            </SideDropDownContainer> */}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.any,
  toggle: PropTypes.func,
}

export default Sidebar
