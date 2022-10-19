import React, { useEffect, useState } from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { toast } from 'react-toastify'
import { getUserInfo } from 'src/services/userInfo'
import { getStudentByProf } from 'src/services/professorService'

const FacultyStudentsTable = ({ subjectId }) => {
  const professorId = getUserInfo().object.professor_id
  const [profStudents, setProfStudents] = useState()

  useEffect(() => {
    getStudentByProf(professorId, subjectId).then((res) => {
      if (res.data && res.data.status === 1) {
        setProfStudents(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [subjectId, professorId])

  console.log(profStudents)
  return (
    <>
      <CTable hover align="middle">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">STUDENT NO</CTableHeaderCell>
            <CTableHeaderCell scope="col">FIRST NAME</CTableHeaderCell>
            <CTableHeaderCell scope="col">MIDDLE NAME</CTableHeaderCell>
            <CTableHeaderCell scope="col">LAST NAME</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {profStudents?.map((profStudents) => (
            <CTableRow key={profStudents[0]}>
              <CTableDataCell>{profStudents[0]}</CTableDataCell>
              <CTableDataCell>{profStudents[1]}</CTableDataCell>
              <CTableDataCell>{profStudents[2]}</CTableDataCell>
              <CTableDataCell>{profStudents[3]}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}

export default FacultyStudentsTable
