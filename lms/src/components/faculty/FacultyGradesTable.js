import React, { useEffect, useState } from 'react'
import {
  CCard,
  CListGroup,
  CListGroupItem,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { toast } from 'react-toastify'
import { Btn } from 'src/styles/Btn.styles.'
import { getAllStudentGrade, getStudentByProf } from 'src/services/professorService'

const FacultyGradesTable = ({ professor_id, subject_id }) => {
  const [gradesInfo, setGradesInfo] = useState([])
  const [profStudents, setProfStudents] = useState()

  useEffect(() => {
    getAllStudentGrade(professor_id, subject_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setGradesInfo(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })

    getStudentByProf(professor_id, subject_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setProfStudents(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [professor_id, subject_id])

  console.log(gradesInfo)
  // console.log('breakline')
  // console.log(profStudents)

  return (
    <>
      <CCard style={{ width: '100%' }}>
        {profStudents?.map((profStudents) => (
          <CListGroup flush key={profStudents[0]}>
            {/* <CListGroupItem>{profStudents[0]}</CListGroupItem> */}
            <CListGroupItem>
              <CListGroup>
                {profStudents[0]} {profStudents[3]}, {profStudents[1]} {profStudents[2]}
                <CListGroupItem>
                  {gradesInfo
                    ?.filter((g) => g[0] === profStudents[0])
                    ?.map((gradesInfo) => (
                      <CTable hover align="middle" key={gradesInfo[0]}>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col">STUDENT ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">PRELIM GRADE</CTableHeaderCell>
                            <CTableHeaderCell scope="col">MIDTERM GRADE</CTableHeaderCell>
                            <CTableHeaderCell scope="col">FINAL RATING</CTableHeaderCell>
                            <CTableHeaderCell scope="col">STATUS</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          <CTableRow>
                            <CTableDataCell>{gradesInfo[0]}</CTableDataCell>
                            <CTableDataCell>{gradesInfo[4]}</CTableDataCell>
                            <CTableDataCell>{gradesInfo[5]}</CTableDataCell>
                            <CTableDataCell>{gradesInfo[6]}</CTableDataCell>
                            <CTableDataCell>{gradesInfo[8]}</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    ))}
                </CListGroupItem>
              </CListGroup>
            </CListGroupItem>
          </CListGroup>
        ))}
      </CCard>
    </>
  )
}

export default FacultyGradesTable
