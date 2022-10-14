import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage,
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilMenu } from '@coreui/icons'
import { FiLogOut } from 'react-icons/fi'
import '../scss/_header.scss'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import logo from 'src/assets/images/gearlogo.png'
import { _headerAdmin, adminDropdown } from './AppHeaderData'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow)

  return (
    <>
      <CHeader position="sticky">
        <CContainer fluid className="stickycont">
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto d-sm-none d-md-none" to="/">
            <CImage src={logo} height={30} width="120%" alt="Logo" />
          </CHeaderBrand>

          {_headerAdmin.map((nav, index) => (
            <CHeaderNav
              className="d-none d-md-flex"
              transition={{ duration: 0.5 + index * 0.1 }}
              key={index}
            >
              <CNavItem>
                <CNavLink to={nav.link}>
                  {nav.name}
                  {nav.icon}
                </CNavLink>
              </CNavItem>
            </CHeaderNav>
          ))}

          <CHeaderNav className="ms-3">
            <CDropdown variant="nav-item">
              <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
                <CAvatar src={logo} size="md" />
              </CDropdownToggle>

              <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">
                  Administrator Profile
                </CDropdownHeader>
                <CDropdownItem href="#">
                  <CIcon icon={cilUser} className="me-2" />
                  Profile
                </CDropdownItem>
                <CDropdownItem href="#">
                  <CIcon icon={cilUser} className="me-2" />
                  Course Load
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">
                  <FiLogOut className="me-2" />
                  Log Out
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CHeaderNav>
        </CContainer>
      </CHeader>
      <CHeader className="mb-4 breadcrumb">
        <CContainer className="bccontainer">
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
    </>
  )
}

export default AppHeader
