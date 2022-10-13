import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import logoLarge from '../assets/images/ABCwhitelogo.png'

import logoSmall from '../assets/images/logo.png'
import { getUserInfo } from '../services/userInfo'

// sidebar nav config
import { _nav, _navStudent } from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.changeState.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow)
  const [navigation, setnavigation] = useState([])
  const userInFo = getUserInfo()

  useEffect(() => {
    if (userInFo.object.type === 'student') {
      setnavigation(_navStudent)
    } else if (userInFo.object.type === 'Admin') {
      setnavigation(_nav)
    }
  }, [userInFo])

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
        <CImage src={logoSmall} className="sidebar-brand-narrow" height={60} alt="Logo" />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} style={{ color: '#fff' }} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
