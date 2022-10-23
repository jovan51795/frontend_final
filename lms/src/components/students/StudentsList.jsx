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
    { key: 'studentNo', sorter: true, filter: false, _style: { width: '17%' } },
    { key: 'firstName', sorter: true, filter: false, _style: { width: '16%' } },
    { key: 'lastName', sorter: true, filter: false, _style: { width: '16%' } },
    {
      key: 'yearLevel',
      label: 'Year Level',
      sorter: true,
      filter: false,
      _style: { width: '15%' },
    },
    { key: 'sem', label: 'Semester', sorter: false, filter: false, _style: { width: '12%' } },
    { key: 'status', sorter: false, filter: false, _style: { width: '8%' } },
    { key: 'actions', sorter: false, filter: false, _style: { width: '11%' } },
  ]
  console.log(students)
  if (students.length > 0) {
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <CCardTitle className="text-center"> STUDENTS MASTER LIST</CCardTitle>
              </CCardHeader>
              <CCardBody>
                <CSmartTable
                  columns={columns}
                  tableFilter
                  cleaner
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
                        <CTableDataCell>
                          <div className="d-flex">
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
                          </div>
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
