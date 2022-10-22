import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'

const StudentGrades = ({ grades }) => {
  const semYear = [...new Set(grades.map((grade) => grade[8] + ' ' + grade[7]))]

  const newGrades = semYear.map((e) => ({
    id: e,
    subjects: [
      grades.filter((x) => {
        return x[8] + ' ' + x[7] === e
      }),
    ],
  }))
  console.log(newGrades)

  const getAverage = (data) => {
    let totalUnits = 0
    let totalProduct = 0
    data.subjects[0].forEach((x) => {
      totalUnits += x[2]
      totalProduct += x[2] * x[3]
    })
    return (totalProduct / totalUnits).toFixed(2)
  }

  return (
    <div>
      {newGrades.map((grade) => (
        <CCard className="mb-4" key={grade.id}>
          <CCardHeader>
            <strong>{grade.id}</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover align="middle">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Grades</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {grade.subjects[0].map((subj) => (
                  <CTableRow key={subj[1]}>
                    <CTableDataCell>{subj[1]}</CTableDataCell>
                    <CTableDataCell>{subj[0]}</CTableDataCell>
                    <CTableDataCell>{subj[2]}</CTableDataCell>
                    <CTableDataCell>{subj[3]}</CTableDataCell>
                    <CTableDataCell>{subj[5]}</CTableDataCell>
                  </CTableRow>
                ))}

                <CTableRow>
                  <CTableDataCell colSpan={3} style={{ textAlign: 'right' }}>
                    <b>Average:</b>
                  </CTableDataCell>
                  <CTableDataCell colSpan={2}>{getAverage(grade)}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      ))}
    </div>
  )
}

export default StudentGrades
