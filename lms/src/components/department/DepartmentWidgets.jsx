import React from 'react'
import {
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'

const DepartmentWidgets = ({ dep }) => {
  return (
    <CWidgetStatsA
      className="mb-4"
      color="primary"
      value={
        <>
          {dep.course.length} &nbsp;&nbsp;&nbsp;
          <span className="fs-6 fw-normal">Courses</span>
        </>
      }
      title={dep.departmentName}
      action={
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret={false} className="p-0">
            <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      }
    />
  )
}

export default DepartmentWidgets
