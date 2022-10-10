import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { AppSidebarNav } from '../AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import logoLarge from '../../assets/images/ABCwhitelogo.png'
import logoSmall from '../../assets/images/logo.png'

const FacultySidebar = ({ navLinks }) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.changeState.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        // dispatch({ type: 'set', sidebarShow: visible })
      }}
      style={{ backgroundColor: '#022135' }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CImage src={logoLarge} className="sidebar-brand-full" height={60} alt="Logo" />
        <CImage src={logoSmall} className="sidebar-brand-narrow" height={50} alt="Logo" />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navLinks} style={{ color: '#fff' }} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

FacultySidebar.defaultProps = {
  navLinks: [
    {
      component: CNavItem,
      name: 'Dashboard',
      to: '/faculty/dashboard',
      icon: null,
      badge: {
        color: 'info',
        text: 'NEW',
      },
    },
    {
      component: CNavTitle,
      name: 'MAIN MENU',
    },
    {
      component: CNavItem,
      name: 'Profile',
      to: '/faculty/profile',
      icon: null,
    },
    {
      component: CNavGroup,
      name: 'Students',
      to: '',
      icon: null,
      items: [
        {
          component: CNavItem,
          name: 'Student List',
          to: 'faculty/students/list',
        },
        {
          component: CNavItem,
          name: 'Attendance Monitoring',
          to: '/faculty/students/attendance-monitoring',
        },
        {
          component: CNavItem,
          name: 'Grades Monitoring',
          to: '/faculty/students/grades-monitoring',
        },
      ],
    },
    {
      component: CNavGroup,
      name: 'Course Load',
      to: '',
      icon: null,
      items: [
        {
          component: CNavItem,
          name: 'Load List',
          to: '/subjects',
        },
        {
          component: CNavItem,
          name: 'Class Schedule',
          to: '/subject/add',
        },
      ],
    },
    {
      component: CNavGroup,
      name: 'Buttons',
      to: '/buttons',
      icon: null,
      items: [
        {
          component: CNavItem,
          name: 'Buttons',
          to: '/buttons/buttons',
        },
        {
          component: CNavItem,
          name: 'Buttons groups',
          to: '/buttons/button-groups',
        },
        {
          component: CNavItem,
          name: 'Dropdowns',
          to: '/buttons/dropdowns',
        },
      ],
    },
  ],
}

export default FacultySidebar
