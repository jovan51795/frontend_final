import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilFolderOpen, cilSpreadsheet, cilSpeedometer, cilBook } from '@coreui/icons'
import { FaCalendarAlt, FaUserTie, FaUser, FaGraduationCap, FaAddressCard } from 'react-icons/fa'
import { RiAdminFill, RiUserSettingsFill } from 'react-icons/ri'
import { ImLibrary, ImBooks } from 'react-icons/im'
import { MdCalendarViewMonth, MdOutlineClass } from 'react-icons/md'
import { GiDiploma } from 'react-icons/gi'
import { BsCardHeading } from 'react-icons/bs'
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
    label: 'Student Admission',
    icon: <FaAddressCard className="nav-icon" />,
    link: '/student/add',
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
    label: 'Subjects',
    icon: <ImBooks className="nav-icon" />,
    link: '/subjects',
  },
]

export const _navFaculty = [
  {
    label: 'My Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    link: '/faculty/dashboard',
  },
  {
    label: 'My Profile',
    icon: <FaUserTie className="nav-icon" />,
    link: '/faculty/profile',
  },
  {
    label: 'My Class Monitoring',
    icon: <MdOutlineClass className="nav-icon" />,
    link: '/faculty/classes',
  },
  // {
  //   label: 'Grades Masterlist',
  //   icon: <BsCardHeading className="nav-icon" />,
  //   link: '/faculty/grades-list',
  // },
  {
    label: 'My Schedule',
    icon: <FaCalendarAlt className="nav-icon" />,
    link: '/faculty/schedule',
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
    link: `${userInFo && userInFo.type}/attendance`,
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
    link: `${userInFo && userInFo.type}/dashboard`,
  },
  {
    label: 'Profile',
    icon: <FaUser className="nav-icon" />,
    link: `${userInFo && userInFo.type}/profile`,
  },

  {
    label: 'Attendance',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    link: `${userInFo && userInFo.type}/attendance`,
  },
  {
    label: 'Schedule',
    icon: <FaCalendarAlt className="nav-icon" />,
    link: `${userInFo && userInFo.type}/schedule`,
  },
  {
    label: 'Grades',
    icon: <MdCalendarViewMonth className="nav-icon" />,
    link: `${userInFo && userInFo.type}/grades`,
  },
  // {
  //   label: 'Course Evaluation',
  //   icon: <GiDiploma className="nav-icon" />,
  //   link: '',
  // },
]
