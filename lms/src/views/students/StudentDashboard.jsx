import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react'
import StudentDashboardWidgets from 'src/components/Student-Module/StudentDashboardWidgets'
import * as studentGradesService from 'src/services/gradesService'
import { getUserInfo } from 'src/services/userInfo'
import { useState, useEffect } from 'react'
import StudentNews from 'src/components/Student-Module/StudentNews'
import NewsCarousel from 'src/components/info-section/NewsCarousel'
import Bulletin from 'src/components/info-section/Bulletin'
import { blazorCultureFormats } from '@syncfusion/ej2-base'
import 'src/scss/_custom.scss'

const StudentDashboard = () => {
  const [grades, setGrades] = useState([])
  const userInfo = getUserInfo().object

  useEffect(() => {
    getGrades(userInfo.student_id)
  }, [])

  const getGrades = (id) => {
    studentGradesService.getGradesbyId(id).then((res) => {
      if (res && res.data) {
        setGrades(res.data.object)
      }
    })
  }

  return (
    <>
      <StudentDashboardWidgets grades={grades} />
      {/* <CCard className="mb-4">
        <CCardHeader>
          <strong>ABCUniversity News</strong>
        </CCardHeader>
        <CCardBody style={{ height: '500px', width: 'auto' }}></CCardBody>
      </CCard> */}
      <div className="py-2">
        <Bulletin />
      </div>
      <CRow>
        {/* <CCol md={6}>thth</CCol> */}
        <CCol className="student-news">
          <NewsCarousel />
        </CCol>
      </CRow>
    </>
  )
}

export default StudentDashboard
