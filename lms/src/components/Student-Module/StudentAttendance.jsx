import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import { data } from 'src/components/Student-Module/data'
import CIcon from '@coreui/icons-react'
import { cilSquare } from '@coreui/icons'
import { FaSquare } from 'react-icons/fa'

const StudentAttendance = () => {
  return (
    <div style={{ height: '200px' }}>
      <div>
        <FaSquare style={{ color: 'green' }} />
        <b> : Present</b> <br />
        <FaSquare style={{ color: 'red' }} />
        <b> : Absent</b>
      </div>
      <ResponsiveCalendar
        data={data}
        from="2022-01-01"
        to="2022-12-31"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </div>
  )
}

export default StudentAttendance
