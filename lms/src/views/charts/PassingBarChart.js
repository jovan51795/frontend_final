import React from 'react'
import { CChart } from '@coreui/react-chartjs'

const PassingBarChart = () => {
  return (
    <div className="container">
      <CChart
        type="bar"
        data={{
          labels: ['Passing', 'Fail', 'Conditional'],
          datasets: [
            {
              label: 'STUDENTS PASSING RATES',
              backgroundColor: '#2C8263',
              data: [40, 20, 12],
            },
          ],
        }}
        labels="passing"
      />
    </div>
  )
}

export default PassingBarChart
