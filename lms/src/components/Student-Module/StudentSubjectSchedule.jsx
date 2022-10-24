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
  CButton,
} from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { getSchedule } from 'src/services/studentService'
import { useState, useEffect } from 'react'
import { getUserInfo } from 'src/services/userInfo'
import { useParams } from 'react-router-dom'
import { getAllProfessor } from 'src/services/professorService'
import { addSubject } from 'src/services/studentService'
import { toast } from 'react-toastify'

const StudentSubjectSchedule = () => {
  const params = useParams()
  const userInFo = getUserInfo().object
  const [prof, setProf] = useState([])
  const navigate = useNavigate()

  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    getsubjects(+params.id)
    getProf()
  }, [])

  const getsubjects = (id) => {
    getSchedule(id).then((res) => {
      if (res && res.data) {
        setSchedule(res.data.object)
      }
    })
  }

  const getProf = () => {
    getAllProfessor().then((res) => {
      if (res && res.data) {
        setProf(res.data)
      }
    })
  }

  const add = (studentID, subjectID) => {
    addSubject(studentID, subjectID).then((res) => {
      if (res && res.data && res.data.status === 1) {
        toast.success(res.data.message)
        // navigate('/student/enroll')
      } else if (res && res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }
  const showProf = (data) => {
    if (data != null && prof.length > 0) {
      return (
        prof.filter((x) => {
          return x.professor_id === data
        })[0].firstName +
        ' ' +
        prof.filter((x) => {
          return x.professor_id === data
        })[0].lastName
      )
    } else {
      return ''
    }
  }

  return (
    <>
      <div>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Choose Schedule</strong>
          </CCardHeader>
          <CCardBody style={{ oveflow: 'scroll', overflow: 'auto', height: '1000px' }}>
            <CTable hover align="middle">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Time</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Section</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Professor Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {schedule.map((sched) => (
                  <CTableRow key={sched}>
                    <CTableDataCell>{sched[3]}</CTableDataCell>
                    <CTableDataCell>{sched[4]}</CTableDataCell>
                    <CTableDataCell>{sched[5]}</CTableDataCell>
                    <CTableDataCell>{showProf(sched[7])}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        className="btn-primary"
                        onClick={add(userInFo.student_id, +params.id)}
                      >
                        <span style={{ color: 'white' }}>Enroll Subjects</span>
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </div>
    </>
  )
}

export default StudentSubjectSchedule
