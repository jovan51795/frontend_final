import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { toast } from 'react-toastify'
import { getStudentGrade, setStudentGrade } from 'src/services/professorService'
import EvaluationCard from 'src/components/faculty/EvaluationCard'
import ClassCard from 'src/components/faculty/ClassCard'
import 'src/scss/_custom.scss'

const GradingSheet = () => {
  const { subject_id, professor_id, student_id } = useParams()
  const [activeKey, setActiveKey] = useState(1)
  const navigate = useNavigate()
  const [student, setStudent] = useState([])
  const [gradeData, setgradeData] = useState()

  useEffect(() => {
    getStudentGrade(+subject_id, +professor_id, +student_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setStudent(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [subject_id, professor_id, student_id])

  const handleSubmit = (grade) => {
    console.log('submitting')
    setStudentGrade(+student_id, +subject_id, +professor_id, grade).then((res) => {
      if (res && res.data && res.data.status === 1) {
        toast.success(res.data.message)
        // console.log(res.data.object)
        setgradeData(res.data.object)
        // navigate('/faculty/classes')
      } else if (res && res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }

  console.log(gradeData)

  if (student.length !== 0) {
    return (
      <>
        <CNav variant="pills" role="tablist">
          <CNavItem className="mb-5">
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              EVALUATION CARD
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
              className="nav-color"
            >
              VIEW CLASS CARD
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
            <EvaluationCard gradeData={gradeData} student={student} onSubmit={handleSubmit} />
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
            {gradeData ? <ClassCard gradeData={gradeData} /> : 'DONE WITH EVALUATION'}
          </CTabPane>
          {/* <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
            <ClassCard />
          </CTabPane> */}
        </CTabContent>
      </>
    )
  }
}

export default GradingSheet
