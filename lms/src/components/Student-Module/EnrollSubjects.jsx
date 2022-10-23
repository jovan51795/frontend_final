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
import { getRecommendedSubject } from 'src/services/studentService'
import { useState,  useEffect} from 'react'
import { getUserInfo } from 'src/services/userInfo'

const EnrollSubjects = () => {
  const userInFo = getUserInfo().object
  const [subject, setSubject] = useState([])
  useEffect(() => {
    getsubjects(userInFo.sem,userInFo.yearLevel,userInFo.course.courseId )
    }, [])
    const getsubjects =(x,y,z)=>{
        getRecommendedSubject(x,y,z).then((res)=>{
      if(res&&res.data){
        setSubject(res.data.object)
      }
      })
      }  
      console.log(subject)

  return (
    <>
      <div>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Recommended Subject</strong>
        </CCardHeader>
        <CCardBody style={{ oveflow: 'scroll', overflow: 'auto', height: '1000px' }}>
          <CTable hover align="middle">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
            {subject.map((sub) => (
                <CTableRow key={sub}>
                  <CTableDataCell>{sub[6]}</CTableDataCell>
                  <CTableDataCell>{sub[7]}</CTableDataCell>
                  <CTableDataCell>{sub[8]}</CTableDataCell>
                  <CTableDataCell>
                  <CButton className="btn-primary">
                  
                <Link to={`/student/enroll/getschedule/${sub[0]}`} style={{ textDecoration: 'none' }}>
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

export default EnrollSubjects
