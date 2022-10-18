import React from 'react'
import { Link } from 'src/styles/LandingHeader.styles'
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react'
import { FaBars, FaUserTie, FaUserGraduate } from 'react-icons/fa'
import { RiAdminFill, RiParentFill } from 'react-icons/ri'
import 'src/scss/_landing.scss'

const AccessDropdown = () => {
  return (
    <CDropdown className="access">
      <CDropdownToggle className="SCTA">
        <FaBars style={{ marginBottom: '4px' }} />
        &nbsp;&nbsp;Access Modules
      </CDropdownToggle>
      <CDropdownMenu className="access-menu">
        <CDropdownItem className="access-item">
          <Link to="/login/student" className="access-color">
            <FaUserGraduate style={{ marginBottom: '2px' }} />
            &nbsp;&nbsp;Student
          </Link>
        </CDropdownItem>
        <CDropdownItem className="access-item">
          <Link to="/login/faculty" className="access-color">
            <FaUserTie style={{ marginBottom: '2px' }} />
            &nbsp;&nbsp;Faculty
          </Link>
        </CDropdownItem>
        <CDropdownItem className="access-item">
          <Link to="/login/parent" className="access-color">
            <RiParentFill style={{ marginBottom: '2px' }} />
            &nbsp;&nbsp;Parent
          </Link>
        </CDropdownItem>
        <CDropdownItem className="access-item">
          <Link to="/login/admin" className="access-color">
            <RiAdminFill style={{ marginBottom: '2px' }} />
            &nbsp;&nbsp;Administrator
          </Link>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AccessDropdown
