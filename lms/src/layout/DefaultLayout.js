import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { getUserInfo } from '../services/userInfo'

const DefaultLayout = () => {
  const navigate = useNavigate()
  const userInFo = getUserInfo()
  useEffect(() => {
    if (!userInFo || userInFo.status === 0) {
      navigate('/')
    }
  }, [userInFo])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
