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

  // console.log(gradesInfo)
  // console.log('breakline')
  // console.log(profStudents)

  return (
    <>
      <CCard style={{ width: '100%' }}>
        {profStudents?.map((profStudents) => (
          <CListGroup flush key={profStudents[0]}>
            <CListGroupItem>
              <CListGroup>
                {profStudents[0]} {profStudents[3]}, {profStudents[1]} {profStudents[2]}
                <CListGroupItem>
                  {gradesInfo
                    ?.filter((g) => g[0] === profStudents[0])
                    ?.map((grades) => (
                      <CTable hover align="middle" key={grades[0]}>
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
                            <CTableDataCell>{grades[0]}</CTableDataCell>
                            <CTableDataCell>{grades[4]}</CTableDataCell>
                            <CTableDataCell>{grades[5]}</CTableDataCell>
                            <CTableDataCell>{grades[6]}</CTableDataCell>
                            <CTableDataCell>{grades[8]}</CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    ))}
                  {!gradesInfo.find((e) => e[0] === profStudents[0]) && (
                    <div>
                      <Btn
                        className="d-flex"
                        to={`/professor/grades/subject/${subject_id}/prof/${professor_id}/student/${profStudents[0]}`}
                      >
                        Evaluate
                      </Btn>
                    </div>
                  )}
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
