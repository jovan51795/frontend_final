import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import { getUserInfo } from 'src/services/userInfo'
import { getPass, getFail, getConditional } from 'src/services/professorService'
import { useState, useEffect } from 'react'

const PassingBarChart = () => {
  const [pass, setPass] = useState(null)
  const [fail, setFail] = useState(null)
  const [conditional, setConditonal] = useState(null)
  const userInfo = getUserInfo().object
  const getPasser = (id) => {
    getPass(id).then((res) => {
      if (res.data) {
        setPass(res.data)
      }
    })
  }
  const getFails = (id) => {
    getFail(id).then((res) => {
      if (res.data) {
        setFail(res.data)
      }
    })
  }
  const getConditionals = (id) => {
    getConditional(id).then((res) => {
      if (res.data) {
        setConditonal(res.data)
      }
    })
  }
  useEffect(() => {
    getPasser(userInfo.professor_id)
    getFails(userInfo.professor_id)
    getConditionals(userInfo.professor_id)
  }, [])

  if (pass !== null || conditional !== null || fail !== null) {
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
                data: [pass, fail, conditional],
              },
            ],
          }}
          labels="passing"
        />
      </div>
    )
  } else {
    return (
      <>
        <div>NO STUDENTS EVALUATED YET</div>
        <div className="container">
          <CChart
            type="bar"
            data={{
              labels: ['Passing', 'Fail', 'Conditional'],
              datasets: [
                {
                  label: 'STUDENTS PASSING RATES',
                  backgroundColor: '#2C8263',
                  data: [0, 0, 0],
                },
              ],
            }}
            labels="passing"
          />
        </div>
      </>
    )
  }
}

export default PassingBarChart
