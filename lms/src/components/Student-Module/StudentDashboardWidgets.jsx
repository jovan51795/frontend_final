import React from 'react'

import { CRow, CCol, CWidgetStatsF } from '@coreui/react'
import { cilBadge, cilBook, cilSchool } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const StudentDashboardWidgets = ({ grades }) => {
  let totalUnits = 0
  let totalProduct = 0
  let totalSubjects = 0
  grades.forEach((grade) => {
    totalUnits += grade[2]
    totalProduct += grade[2] * grade[3]
    totalSubjects++
  })
  const GWA = totalProduct / totalUnits || 0
  console.log(grades)
  return (
    <CRow>
      <CCol xs={12} sm={6} lg={4}>
        {/* edit lg for size */}
        <CWidgetStatsF
          className="mb-4"
          color="primary"
          icon={<CIcon icon={cilSchool} height={24} />}
          title="Total Units Earned"
          value={totalUnits + ' Units'}
        />
      </CCol>
      <CCol xs={12} sm={6} lg={4}>
        <CWidgetStatsF
          className="mb-4"
          color="warning"
          icon={<CIcon icon={cilBook} height={24} />}
          title="Total Subjects Completed"
          value={totalSubjects + ' Subjects'}
        />
      </CCol>
      <CCol xs={12} sm={6} lg={4}>
        <CWidgetStatsF
          className="mb-4"
          color="success"
          icon={<CIcon icon={cilBadge} height={24} />}
          title="Current GWA"
          value={GWA}
        />
      </CCol>
    </CRow>
  )
}

export default StudentDashboardWidgets
