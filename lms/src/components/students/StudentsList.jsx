import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CRow,
  CTableDataCell,
  CTooltip,
} from '@coreui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiFileText, FiArchive } from 'react-icons/fi'
import { RiEdit2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { getAllStudents } from 'src/redux/actions/studentActions'
import { deleteStudentById } from '../../redux/actions/studentActions'
import 'src/scss/_admin.scss'
import { CSmartTable } from '@coreui/react-pro'
import Loading from '../loading/Loading'

const StudentsList = () => {
  const students = useSelector((state) => {
    return state.students
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllStudents())
  }, [])

  const handleOnDelete = (id) => {
    dispatch(deleteStudentById(id))
  }

  const columns = [
    { key: 'studentNo', sorter: true, filter: false },
    { key: 'firstName', sorter: true, filter: false },
    { key: 'lastName', sorter: true, filter: false },
    { key: 'academicYear', sorter: true, filter: false },
    { key: 'sem', label: 'semester', sorter: true, filter: false },
    { key: 'status', sorter: true, filter: false },
    { key: 'actions', sorter: false, filter: false },
  ]
  if (students.length > 0) {
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <CCardTitle> STUDENTS MASTER LIST</CCardTitle>
              </CCardHeader>
              <CCardBody>
                <CSmartTable
                  columns={columns}
                  columnFilter
                  columnSorter
                  items={students}
                  itemsPerPageSelect
                  itemsPerPage={5}
                  pagination
                  sorterValue={{ column: 'subjectCode', state: 'asc' }}
                  tableProps={{
                    hover: true,
                    responsive: true,
                  }}
                  scopedColumns={{
                    status: (student) => {
                      return student.status === 'regular' ? (
                        <td>
                          <span className="badge bg-info">Regular</span>
                        </td>
                      ) : (
                        <td>
                          <mark className="badge bg-warning">Irregular</mark>
                        </td>
                      )
                    },
                    actions: (student) => {
                      return (
                        <CTableDataCell className="d-flex">
                          <CTooltip content="View Details" placement="top">
                            <Link
                              to={`/student/details/${student.student_id}`}
                              color="info"
                              className="mx-1 btn btn-view"
                            >
                              <FiFileText className="nav-icon" />
                            </Link>
                          </CTooltip>
                          <div className="vr"></div>
                          <CTooltip content="delete" placement="top">
                            <CButton
                              onClick={() => handleOnDelete(student.student_id)}
                              className="mx-1 btn-view"
                            >
                              <FiArchive className="nav-icon" />
                            </CButton>
                          </CTooltip>
                          <div className="vr"></div>
                          <CTooltip content="update" placement="top">
                            <Link
                              to={`/student/edit/${student.student_id}`}
                              className="btn btn-view"
                            >
                              <RiEdit2Fill className="nav-icon" />
                            </Link>
                          </CTooltip>
                        </CTableDataCell>
                      )
                    },
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  } else {
    return <Loading />
  }
}

export default StudentsList
