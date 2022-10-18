import React from 'react'

import { CRow, CCol, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBadge, cilBook, cilSchool } from '@coreui/icons'

const StudentDashboardWidgets = () => {
  return (
    <CRow>
      <CCol xs={12} sm={6} lg={4}>
        {/* edit lg for size */}
        <CWidgetStatsF
          className="mb-4"
          color="primary"
          icon={<CIcon icon={cilSchool} height={24} />}
          title="Total Units Earned"
          value="0 Units"
        />
      </CCol>
      <CCol xs={12} sm={6} lg={4}>
        <CWidgetStatsF
          className="mb-4"
          color="warning"
          icon={<CIcon icon={cilBook} height={24} />}
          title="Total Subjects Completed"
          value="0 Subjects"
        />
      </CCol>
      <CCol xs={12} sm={6} lg={4}>
        <CWidgetStatsF
          className="mb-4"
          color="success"
          icon={<CIcon icon={cilBadge} height={24} />}
          title="Current GWA"
          value="0.0"
        />
      </CCol>
    </CRow>
  )
}

export default StudentDashboardWidgets
