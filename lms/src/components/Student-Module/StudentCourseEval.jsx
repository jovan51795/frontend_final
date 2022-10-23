import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CTableCaption,
} from '@coreui/react'
import { toast } from 'react-toastify'
import { getCourseEvaluation } from 'src/services/subjectService'
import { getUserInfo } from 'src/services/userInfo'

const StudentCourseEval = ({ courses }) => {
  const userInfoId = getUserInfo().object.student_id
  const [data, setData] = useState([])

  // useEffect(() => {
  //   getCourse(1, '1st Semester', 'Freshman')
  // }, [])

  // console.log(data)

  // const getCourse = (id, sem, year) => {
  //   getCourseEvaluation(id, sem, year).then((res) => {
  //     if (res && res.data && res.data.object) {
  //       let d = res.data.object
  //       setData(d)
  //     }
  //   })
  // }


  useEffect(() => {
    getCourse(userInfoId)
  }, [])

  const getCourse = (id) => {
    getCourseEvaluation(id).then((res) => {
      if (res && res.data && res.data.object) {
        let d = res.data.object
        setData(d)
      }
    })
  }

  const getTotalUnits = (sem, year) => {
    let totalUnits = 0
    data
      .filter((x) => {
        return x[5] === sem && x[9] === year
      })
      .forEach((y) => {
        totalUnits += y[8]
      })
    return totalUnits
  }

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Course Evaluation</h4>
      {courses.map((year) =>
        year.sems.map((sem) => (
          <CCard className="mb-4" key={sem}>
            <CCardHeader>
              <strong>{sem.id + ' ' + '(' + year.level + ')'}</strong>
            </CCardHeader>
            <CCardBody>
              <CTable hover align="middle">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Department</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data
                    .filter((x) => {
                      return x[5] === sem.id && x[9] === year.level
                    })
                    .map((e) => (
                      <CTableRow key={e}>
                        <CTableDataCell>{e[2]}</CTableDataCell>
                        <CTableDataCell>{e[6]}</CTableDataCell>
                        <CTableDataCell>{e[7]}</CTableDataCell>
                        <CTableDataCell>{e[8]}</CTableDataCell>
                      </CTableRow>
                    ))}
                  <CTableRow>
                    <CTableDataCell colSpan={3} style={{ textAlign: 'right' }}>
                      <b>Total Units: </b>
                    </CTableDataCell>
                    <CTableDataCell>
                      <b>{getTotalUnits(sem.id, year.level)}</b>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        )),
      )}
    </>
  )
}

export default StudentCourseEval
