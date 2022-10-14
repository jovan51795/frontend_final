import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBook, cilSchool, cilSpeedometer, cilInstitution, cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

export const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'ADMIN',
  },
  {
    component: CNavItem,
    name: 'Departments',
    to: '/departments',
    icon: <CIcon icon={cilInstitution} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Faculty',
    to: '',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Faculty',
        to: '/professor/add',
      },
      {
        component: CNavItem,
        name: 'Faculties',
        to: '/faculties',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Student',
    to: '',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Student',
        to: '/student/add',
      },
      {
        component: CNavItem,
        name: 'Student List',
        to: '/students',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Subject',
    to: '',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Subject List',
        to: '/subjects',
      },
      {
        component: CNavItem,
        name: 'Add Subject',
        to: '/subject/add',
      },
    ],
  },
]

export const _navStudent = [
  {
    component: CNavTitle,
    name: 'STUDENT',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/student/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/student/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'My Course',
    to: '',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Subjects',
        to: '/student/subjects',
      },
      {
        component: CNavItem,
        name: 'Grades',
        to: '/student/grades',
      },
      // {
      //   component: CNavItem,
      //   name: 'Enroll Subjects',
      //   to: '/student/enroll',
      // },
    ],
  },
]

export default _nav
