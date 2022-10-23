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
import 'src/scss/_faculty.scss'

const GradeList = ({ profsubject }) => {
  const professor_id = getUserInfo().object.professor_id

  return (
    <CCard className="my-3 subject-card">
      {profsubject?.map((profsubject) => (
        <CListGroup className="my-3 sub-list" key={profsubject[2]}>
          <CListGroupItem>
            <span className="s-list">SUBJECT ID:</span>
            <span>&ensp;&ensp;&ensp;&ensp;&nbsp;{profsubject[2]}</span>
            <br />
            <span className="s-list">SUBJECT CODE: </span>
            <span>&ensp;{profsubject[1]}</span>
            <br />
            <span className="s-list">SUBJECT TITLE: </span>
            <span className="mainsubj">&ensp;{profsubject[0]}</span>
          </CListGroupItem>
          <CAccordion>
            <CAccordionItem itemKey={profsubject[2]}>
              <CAccordionHeader>
                <span
                  className="text-decoration-underline px-3 fw-bold "
                  style={{ color: '#2C8263' }}
                >
                  {' '}
                  STUDENTS LIST
                </span>
              </CAccordionHeader>
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
