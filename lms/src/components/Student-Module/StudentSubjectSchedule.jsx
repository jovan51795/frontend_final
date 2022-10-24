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
    CButton
  } from '@coreui/react'
  import { Link } from 'react-router-dom'
  import React from 'react'
  import { getSchedule } from 'src/services/studentService'
  import { useState,  useEffect} from 'react'
  import { getUserInfo } from 'src/services/userInfo'
import { useParams } from 'react-router-dom'
import { getAllProfessor } from 'src/services/professorService'

const StudentSubjectSchedule = () => {
    const params = useParams()
console.log(+params.id)


const userInFo = getUserInfo()

const [prof, setProf] = useState([])

const getProf = ()=>{
    getAllProfessor().then((res)=>{
        if(res&&res.data){
            setProf(res.data)
          
        }
        })
}


  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    getsubjects(+params.id)
    getProf()
    }, [])
    const getsubjects =(id)=>{
        getSchedule(id).then((res)=>{
      if(res&&res.data){
        setSchedule(res.data.object)
      }
      })
      }  
    //   console.log(schedule)
      console.log(prof)

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
                  <CTableDataCell></CTableDataCell>
                  <CTableDataCell>
                  <CButton className="btn-primary">
                  
                <Link to={`/student/enroll/getschedule/${sched[0]}`} style={{ textDecoration: 'none' }}>
                  <span style={{ color: 'white' }}>Enroll Subjects</span>
                </Link>
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