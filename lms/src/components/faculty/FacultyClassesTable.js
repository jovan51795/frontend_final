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
import FacultyStudentsTable from './FacultyStudentsTable'

const FacultySubjectsTable = ({ profsubject }) => {
  return (
    <>
      <CCard>
        {profsubject?.map((profsubject) => (
          <CListGroup flush key={profsubject[2]}>
            <CListGroupItem>
              <div>SUBJECT ID: {profsubject[2]}</div>
              <div>SUBJECT TITLE: {profsubject[0]}</div>
              <div>SUBJECT CODE: {profsubject[1]}</div>
            </CListGroupItem>
            {/* <CListGroupItem> */}
            <CAccordion flush>
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
