import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBook, cilSchool, cilSpeedometer, cilInstitution, cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

export const _navAdmin = [
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
    name: 'Professor',
    to: '',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Professor',
        to: '/professor/add',
      },
      {
        component: CNavItem,
        name: 'Professors',
        to: '/professors',
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

export const _navFaculty = [
  {
    component: CNavTitle,
    name: 'FACULTY ACCESS',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/faculty/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
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
]

export const _navParent = [
  {
    component: CNavTitle,
    name: 'PARENT',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/parent/dashboard',
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
        to: '/student/allsubjects',
      },
      {
        component: CNavItem,
        name: 'Enroll Subjects',
        to: '/student/enroll',
      },
    ],
  },
]
