import React, { Suspense, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './scss/style.scss'
import { getUserInfo } from './services/userInfo'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Landing = React.lazy(() => import('./views/pages/landing/LandingPage'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const FacultyModule = React.lazy(() => import('./views/pages/faculty/FacultyModule'))

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const userInFo = getUserInfo()

  useEffect(() => {
    if (
      (location.pathname === '/register' || location.pathname === '/login') &&
      userInFo &&
      userInFo.status === 1
    ) {
      navigate('/dashboard')
    } else if (!userInFo || (userInFo && userInFo.status === 0)) {
      navigate('/abcuniversity')
    }
  }, [userInFo])

  return (
    <Suspense fallback={loading}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/abcuniversity" />} />
        <Route exact path="/abcuniversity" name="Landing Page" element={<Landing />} />
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/register" name="Register Page" element={<Register />} />
        <Route
          exact
          path="/faculty/dashboard"
          name="Faculty Dashboard"
          element={<FacultyModule />}
        />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </Suspense>
  )
}

export default App
