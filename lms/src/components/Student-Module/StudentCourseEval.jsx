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
import { getCourseEvaluation } from 'src/services/subjectService'
import { getUserInfo } from 'src/services/userInfo'

const StudentCourseEval = ({ courses }) => {
  const userInfoId = getUserInfo().object.student_id
  const [data, setData] = useState([])

  useEffect(() => {
    getCourse(1, '1st Semester', 'Freshman')
  }, [])

  console.log(data)

  const getCourse = (id, sem, year) => {
    getCourseEvaluation(id, sem, year).then((res) => {
      if (res && res.data && res.data.object) {
        let d = res.data.object
        setData(d)
      }
    })
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
                    <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {/* {
                    (getCourse(1, sem.id, year.level).map = (d) => (
                      <CTableRow key={d[0]}>
                        <CTableHeaderCell>{d[0]}</CTableHeaderCell>
                        <CTableHeaderCell>s</CTableHeaderCell>
                        <CTableHeaderCell>s</CTableHeaderCell>
                      </CTableRow>
                    ))
                  } */}

                  <CTableRow>
                    <CTableDataCell colSpan={3} style={{ textAlign: 'right' }}>
                      <b>Total Units:</b>
                    </CTableDataCell>
                    <CTableDataCell></CTableDataCell>
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
