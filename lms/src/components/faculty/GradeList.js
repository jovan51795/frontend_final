import React from 'react'
import {
  CCard,
  CListGroup,
  CListGroupItem,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/react'
import { getUserInfo } from 'src/services/userInfo'
import FacultyGradesTable from './FacultyGradesTable'

const GradeList = ({ profsubject }) => {
  const professor_id = getUserInfo().object.professor_id

  return (
    <CCard className="my-3 subject-card">
      {profsubject?.map((profsubject) => (
        <CListGroup className="my-3 sub-list" key={profsubject[2]}>
          <CListGroupItem>
            <div>SUBJECT ID: {profsubject[2]}</div>
            <div>SUBJECT TITLE: {profsubject[0]}</div>
            <div>SUBJECT CODE: {profsubject[1]}</div>
          </CListGroupItem>
          <CAccordion>
            <CAccordionItem itemKey={profsubject[2]}>
              <CAccordionHeader>Student List</CAccordionHeader>
              <CAccordionBody>
                <FacultyGradesTable professor_id={professor_id} subject_id={profsubject[2]} />
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </CListGroup>
      ))}
    </CCard>
  )
}

export default GradeList
