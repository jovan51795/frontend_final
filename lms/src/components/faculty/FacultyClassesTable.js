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
import 'src/scss/_faculty.scss'
import FacultyStudentsTable from './FacultyStudentsTable'
import { Btn } from 'src/styles/Btn.styles.'

const FacultySubjectsTable = ({ profsubject }) => {
  return (
    <>
      <CCard className="my-3 subject-card">
        {profsubject?.map((profsubject) => (
          <CListGroup className="my-3 sub-list" key={profsubject[2]}>
            <CListGroupItem>
              <div>SUBJECT ID: {profsubject[2]}</div>
              <div>SUBJECT TITLE: {profsubject[0]}</div>
              <div>SUBJECT CODE: {profsubject[1]}</div>
              <div className="py-2">
                <Btn to={`/faculty/attendance/${profsubject[2]}`}>Attendance Log</Btn>
              </div>
            </CListGroupItem>
            {/* <CListGroupItem> */}
            <CAccordion>
              <CAccordionItem itemKey={profsubject[2]}>
                <CAccordionHeader>Student List</CAccordionHeader>
                <CAccordionBody>
                  <FacultyStudentsTable subjectId={profsubject[2]} />
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
            {/* </CListGroupItem> */}
          </CListGroup>
        ))}
      </CCard>
    </>
  )
}

export default FacultySubjectsTable
