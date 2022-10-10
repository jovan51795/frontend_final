import React from 'react'
import FacultyHeader from 'src/components/header/FacultyHeader'
import FacultySidebar from 'src/components/sidebar/FacultySidebar'
import { AppFooter } from 'src/components'
import FacultyDashboard from 'src/views/faculty/FacultyDashboard'

const FacultyModule = () => {
  return (
    <>
      <div>
        <FacultySidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <FacultyHeader />
          <div className="body flex-grow-1 px-3">
            <FacultyDashboard />
          </div>
          <AppFooter />
        </div>
      </div>
    </>
  )
}

export default FacultyModule
