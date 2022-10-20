import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilFolderOpen, cilSpreadsheet, cilSpeedometer, cilBook } from '@coreui/icons'
import { FaCalendarAlt, FaUserTie, FaUser, FaGraduationCap } from 'react-icons/fa'
import { RiAdminFill, RiUserSettingsFill } from 'react-icons/ri'
import { ImLibrary, ImBooks } from 'react-icons/im'
import { MdCalendarViewMonth, MdOutlineClass } from 'react-icons/md'
import { GiDiploma } from 'react-icons/gi'
import { getUserInfo } from './services/userInfo'

const userInFo = getUserInfo().object

export const _navAdmin = [
  {
    label: 'My Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    link: '/dashboard',
  },
  {
    label: 'My Profile',
    icon: <RiAdminFill className="nav-icon" />,
    link: '/admin/profile',
  },
  {
    label: 'Student Module',
    icon: <RiUserSettingsFill className="nav-icon" />,
    link: '/students',
  },
  {
    label: 'Faculty Module',
    icon: <FaUserTie className="nav-icon" />,
    link: '/professors',
  },
  {
    label: 'Departments',
    icon: <ImLibrary className="nav-icon" />,
    link: '/departments',
  },
  {
    label: 'Programs',
    icon: <FaGraduationCap className="nav-icon" />,
    link: '/subjects',
  },
  {
    label: 'Subjects',
    icon: <ImBooks className="nav-icon" />,
    link: '/subjects',
  },
  {
    label: 'Class Scheduler',
    icon: <FaCalendarAlt className="nav-icon" />,
    link: '',
  },
]

export const _navFaculty = [
  {
    label: 'My Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    link: `${userInFo && userInFo.type}/dashboard`,
  },
  {
    label: 'My Profile',
    icon: <FaUserTie className="nav-icon" />,
    link: `${userInFo && userInFo.type}/profile`,
  },
  {
    label: 'My Classes',
    icon: <MdOutlineClass className="nav-icon" />,
    link: `${userInFo.type}/classes`,
  },
  {
    label: 'My Schedule',
    icon: <FaCalendarAlt className="nav-icon" />,
    link: `${userInFo && userInFo.type}/schedule`,
  },
  {
    label: 'My Attendance Monitoring',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    link: `${userInFo && userInFo.type}/attendance-monitoring`,
  },
  {
    label: 'Student Evaluation',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
    link: '/faculty/students-grades',
  },
]

export const _navStudent = [
  {
    label: 'My Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    link: `${userInFo && userInFo.type}/dashboard`,
  },
  {
    label: 'My Profile',
    icon: <FaUser className="nav-icon" />,
    link: `${userInFo && userInFo.type}/profile`,
  },
  {
    label: 'My Subjects',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    link: `${userInFo && userInFo.type}/subjects`,
  },
  {
    label: 'My Schedule',
    icon: <FaCalendarAlt className="nav-icon" />,
    link: `${userInFo && userInFo.type}/schedule`,
  },
  {
    label: 'My Attendance',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    link: '',
  },
  {
    label: 'My Grades',
    icon: <MdCalendarViewMonth className="nav-icon" />,
    link: `${userInFo && userInFo.type}/grades`,
  },
  {
    label: 'Course Evaluation',
    icon: <GiDiploma className="nav-icon" />,
    link: '',
  },
]

export const _navParent = [
  {
    label: 'My Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    link: '',
  },
  {
    label: 'My Student Schedule',
    icon: <FaCalendarAlt className="nav-icon" />,
    link: '',
  },
  {
    label: 'My Student Attendance',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    link: '',
  },
  {
    label: 'My Student Grades',
    icon: <MdCalendarViewMonth className="nav-icon" />,
    link: '',
  },
  {
    label: 'Course Evaluation',
    icon: <GiDiploma className="nav-icon" />,
    link: '',
  },
]
