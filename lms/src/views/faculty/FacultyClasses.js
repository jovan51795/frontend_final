import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getUserInfo } from 'src/services/userInfo'
import { getSubjectByProfessor } from 'src/services/professorService'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { BsCardHeading } from 'react-icons/bs'
import { FaBookReader } from 'react-icons/fa'
import FacultyClassesTable from 'src/components/faculty/FacultyClassesTable'
import GradeList from 'src/components/faculty/GradeList'
import 'src/scss/_faculty.scss'

const FacultySubjects = () => {
  const userInfo = getUserInfo().object
  const [profsubject, setProfSubject] = useState()
  const [activeKey, setActiveKey] = useState(1)

  useEffect(() => {
    getSubjectByProfessor(+userInfo.professor_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setProfSubject(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [])

  if (profsubject) {
    return (
      <>
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink
              
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
              className="tab1"
            >
              <FaBookReader className="nav-icon pb-1" />
              &nbsp;&nbsp;STUDENT MASTERLIST
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
              className="tab2 me-6"
            >
              <BsCardHeading className="nav-icon mb-1" />
              &nbsp;&nbsp;GRADES MASTERLIST
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
            <FacultyClassesTable profsubject={profsubject} />
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
            <GradeList profsubject={profsubject} />
          </CTabPane>
        </CTabContent>
      </>
    )
  } else {
    return (
      <div>
        <h1 className="text-center m-5">No Classes Yet</h1>
      </div>
    )
  }
}

export default FacultySubjects
