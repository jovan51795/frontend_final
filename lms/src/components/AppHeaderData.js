import React from 'react'
import CIcon from '@coreui/icons-react'
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
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilMenu,
} from '@coreui/icons'
import { FiLogOut } from 'react-icons/fi'

export const _headerAdmin = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: null,
  },
  {
    name: 'Departments',
    link: '/departments',
    icon: null,
  },
  {
    name: 'Faculty',
    link: '/departments',
    icon: null,
  },
  {
    name: 'Students',
    link: '/departments',
    icon: null,
  },
]

export const adminDropdown = [
  {
    component: CDropdownHeader,
    label: 'Administrator Profile',
  },
  {
    component: CDropdownItem,
    label: 'Profile',
    link: '/admin/profile',
    icon: <CIcon icon={cilUser} className="me-2" />,
  },
  {
    component: CDropdownItem,
    label: 'Something',
    link: '/admin/profile',
    icon: <CIcon icon={cilUser} className="me-2" />,
  },
  {
    component: CDropdownItem,
    label: 'Course Load',
    link: '/admin/profile',
    icon: <CIcon icon={cilUser} className="me-2" />,
  },
  {
    component: CDropdownDivider,
  },
  {
    component: CDropdownItem,
    label: 'Logout',
    link: '/logout',
    icon: <FiLogOut className="me-2" />,
  },
]
