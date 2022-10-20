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
import { Link } from 'react-router-dom'
import { deleteProfessor } from '../../redux/actions/professorAction'
import { getAllProfessor } from '../../services/professorService'

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
      <CCard>
        <CCardBody style={{ overflow: 'auto scroll', width: '100%' }}>
          <CTable caption="top">
            <CTableCaption>Professor List</CTableCaption>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Professor No.</CTableHeaderCell>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Work</CTableHeaderCell>
                <CTableHeaderCell>Gender</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {professors.map((prof) => (
                <CTableRow key={prof.professor_id}>
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
                      <Link className="btn btn-info me-2" to={`/professor/${prof.professor_id}`}>
                        <CIcon icon={cilArrowThickRight} />
                      </Link>
                    </CTooltip>
                    <CTooltip content="Delete" placement="top">
                      <CButton
                        onClick={() => handleOnDelete(prof.professor_id)}
                        color="danger"
                        className="me-2"
                      >
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTooltip>
                    <CTooltip content="Update" placement="top">
                      <Link
                        className="btn btn-success me-2"
                        to={`/professor/edit/${prof.professor_id}`}
                      >
                        <CIcon icon={cilPencil} />
                      </Link>
                    </CTooltip>
                    <CTooltip content="Subjects" placement="top">
                      <Link
                        className="btn btn-warning me-2"
                        to={`/professor/subjects/${prof.professor_id}`}
                      >
                        <CIcon icon={cilBook} />
                      </Link>
                    </CTooltip>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    )
  }
}

export default ProfessorList
