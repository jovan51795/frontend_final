import { cilArrowThickRight, cilBook, cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTooltip,
} from '@coreui/react'
import { CTableRow } from '@coreui/react-pro'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiFileText, FiArchive } from 'react-icons/fi'
import { RiEdit2Fill } from 'react-icons/ri'
import { GrBook } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { deleteProfessor } from '../../redux/actions/professorAction'
import { getAllProfessor } from '../../services/professorService'
import { Btn } from 'src/styles/Btn.styles.'
import { ImUserTie } from 'react-icons/im'
import 'src/scss/_admin.scss'

const ProfessorList = () => {
  const dispatch = useDispatch()
  const [professors, setProfessors] = useState(null)
  useEffect(() => {
    getAll()
  }, [])

  const handleOnDelete = (id) => {
    dispatch(deleteProfessor(id))
  }

  const getAll = () => {
    getAllProfessor().then((res) => {
      setProfessors(res.data)
    })
  }

  useSelector((state) => {
    if (state.professor && state.professor.status === 1) {
      getAll()
    }
  })
  if (professors) {
    return (
      <>
        <div className="container">
          <div className="d-flex justify-content-end align-items-center">
            <Btn big="true" to="/professor/add" className="my-3">
              <ImUserTie /> Add Faculty Member
            </Btn>
          </div>
        </div>
        <hr className="mb-5 m-0" />
        <CCard className="notrounded">
          <CCardBody style={{ overflow: 'auto scroll', width: '100%' }}>
            <CTable caption="top">
              <CTableCaption className="text-center txt-style pt-1">
                FACULTY MASTER LIST
              </CTableCaption>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell className="col-title">PROFESSOR NO.</CTableHeaderCell>
                  <CTableHeaderCell className="col-title">NAME</CTableHeaderCell>
                  <CTableHeaderCell className="col-title">WORK</CTableHeaderCell>
                  <CTableHeaderCell className="col-title">GENDER</CTableHeaderCell>
                  <CTableHeaderCell className="col-title">STATUS</CTableHeaderCell>
                  <CTableHeaderCell className="col-title">ACTIONS</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {professors.map((prof) => (
                  <CTableRow key={prof.professor_id} className="text-center">
                    <CTableDataCell>{prof.professorNo}</CTableDataCell>
                    <CTableDataCell>
                      {prof.firstName} {prof.lastName}
                    </CTableDataCell>
                    <CTableDataCell>{prof.work}</CTableDataCell>
                    <CTableDataCell>{prof.gender}</CTableDataCell>
                    <CTableDataCell>
                      {prof.status === 'Regular' ? (
                        <span className="badge bg-info">{prof.status}</span>
                      ) : (
                        <span className="badge bg-warning">{prof.status}</span>
                      )}
                    </CTableDataCell>
                    <CTableDataCell style={{ display: 'flex' }}>
                      <CTooltip content="View Details" placement="top">
                        <Link className="btn btn-view mx-1" to={`/professor/${prof.professor_id}`}>
                          <FiFileText className="nav-icon" />
                        </Link>
                      </CTooltip>
                      <div className="vr"></div>
                      <CTooltip content="Delete" placement="top">
                        <CButton
                          onClick={() => handleOnDelete(prof.professor_id)}
                          color="danger"
                          className="mx-1 btn-view"
                        >
                          <FiArchive className="nav-icon" />
                        </CButton>
                      </CTooltip>
                      <div className="vr"></div>
                      <CTooltip content="Update" placement="top">
                        <Link
                          className="btn btn-view mx-1"
                          to={`/professor/edit/${prof.professor_id}`}
                        >
                          <RiEdit2Fill className="nav-icon" />
                        </Link>
                      </CTooltip>
                      <div className="vr"></div>
                      <CTooltip content="Subjects" placement="top">
                        <Link
                          className="btn btn-view mx-1"
                          to={`/professor/subjects/${prof.professor_id}`}
                        >
                          <GrBook className="nav-icon" />
                        </Link>
                      </CTooltip>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default ProfessorList
