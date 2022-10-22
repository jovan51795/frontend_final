import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowThickRight, cilPencil, cilTrash } from '@coreui/icons'
import { Link } from 'react-router-dom'
import { CSmartTable } from '@coreui/react-pro'

const SubjectsList = ({ subjects, onDelete, department }) => {
  const [subject, setSubject] = useState([...subjects])
  const [dep, setDep] = useState([...department])

  const handleFilter = (e, type) => {
    var search = e.currentTarget.value
    const subs = subjects
    e.preventDefault()
    if (type === 'input') {
      if (search === '') {
        return setSubject([...subs])
      }
      const sub = subjects.filter(
        (s) =>
          s.subjectCode.toLowerCase().includes(search.toLowerCase()) ||
          s.subjectTitle.toLowerCase().includes(search.toLowerCase()),
      )
      setSubject([...sub])
    } else {
      if (search === 'All') {
        return setSubject([...subs])
      }
      const sub = subjects.filter((s) => s.departmentName === search)
      setSubject([...sub])
    }
  }

  const columns = [
    { key: 'subjectCode', filter: false, sorter: true, _style: { width: '150px' } },
    { key: 'subjectTitle', filter: false, sorter: true, _style: { width: '150px' } },
    { key: 'units', filter: false, sorter: true, _style: { width: '100px' } },
    { key: 'prerequisites', filter: false, sorter: true, _style: { width: '150px' } },
    {
      key: 'activeDeactive',
      label: 'status',
      filter: false,
      sorter: true,
      _style: { width: '100px' },
    },
    { key: 'actions', filter: false, sorter: false },
  ]
  return (
    <>
      <CRow>
        <CCol className="mb-3">
          <CCard>
            <CCardBody className="d-flex justify-content-end">
              <Link className="btn btn-success fw-bolder text-dark" to="/subject/add">
                Add Subject
              </Link>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <strong>Subjects Table</strong>
              <CInputGroup className="d-flex align-items-center justify-content-center">
                <CRow className="w-100">
                  <CCol lg={8} className=" mt-2">
                    <CFormInput
                      name="subject"
                      onChange={(e) => handleFilter(e, 'input')}
                      placeholder="Search Subject"
                    />
                  </CCol>
                  <CCol lg={4} className="mt-2">
                    <CFormSelect name="department" onChange={(e) => handleFilter(e, 'dep')}>
                      <option>All</option>
                      {dep.map((depart, idx) => (
                        <option key={idx}>{depart.departmentName}</option>
                      ))}
                    </CFormSelect>
                  </CCol>
                </CRow>
              </CInputGroup>
            </CCardHeader>
            <CCardBody>
              <CSmartTable
                columns={columns}
                columnFilter
                columnSorter
                items={subject}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                sorterValue={{ column: 'subjectCode', state: 'asc' }}
                tableProps={{
                  hover: true,
                  responsive: true,
                }}
                scopedColumns={{
                  activeDeactive: (sub) => {
                    return sub.activeDeactive ? (
                      <td>
                        <span className="badge bg-info">active</span>
                      </td>
                    ) : (
                      <td>
                        <span className="badge bg-warning">deactivated</span>
                      </td>
                    )
                  },
                  actions: (sub) => {
                    return (
                      <CTableDataCell>
                        <div className="d-flex">
                          <CTooltip content="View Details" placement="top">
                            <Link
                              className="btn btn-info"
                              to={`/subject/details/${sub.subject_id}`}
                            >
                              <CIcon icon={cilArrowThickRight} />
                            </Link>
                          </CTooltip>
                          <CTooltip content="delete" placement="top">
                            <CButton
                              onClick={() => onDelete(sub.subject_id)}
                              color="danger"
                              className="mx-3"
                            >
                              <CIcon icon={cilTrash} />
                            </CButton>
                          </CTooltip>
                          <CTooltip content="delete" placement="top">
                            <Link
                              className="btn btn-success"
                              to={`/subject/edit/${sub.subject_id}`}
                            >
                              <CIcon icon={cilPencil} />
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

      {/* <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <strong>Subjects Table</strong>
              <CInputGroup className="d-flex align-items-center justify-content-center">
                <CRow className="w-100">
                  <CCol lg={8} className=" mt-2">
                    <CFormInput
                      name="subject"
                      onChange={(e) => handleFilter(e, 'input')}
                      placeholder="Search Subject"
                    />
                  </CCol>
                  <CCol lg={4} className="mt-2">
                    <CFormSelect name="department" onChange={(e) => handleFilter(e, 'dep')}>
                      <option>All</option>
                      {dep.map((depart, idx) => (
                        <option key={idx}>{depart.departmentName}</option>
                      ))}
                    </CFormSelect>
                  </CCol>
                </CRow>
              </CInputGroup>
            </CCardHeader>
            <CCardBody className="subject-list-table">
              <CTable className="overflow-auto">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Subject Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Units</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Prerequisites</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {subject.map((sub) => (
                    <CTableRow key={sub.subject_id}>
                      <CTableDataCell>{sub.subjectCode} </CTableDataCell>
                      <CTableDataCell>{sub.subjectTitle} </CTableDataCell>
                      <CTableDataCell>{sub.units} </CTableDataCell>
                      <CTableDataCell>{sub.prerequisites}</CTableDataCell>
                      <CTableDataCell>
                        {sub.activeDeactive ? (
                          <span className="badge bg-info">active</span>
                        ) : (
                          <span className="badge bg-warning">deactivated</span>
                        )}
                      </CTableDataCell>
                      <CTableDataCell className="d-flex">
                        <CTooltip content="View Details" placement="top">
                          <Link className="btn btn-info" to={`/subject/details/${sub.subject_id}`}>
                            <CIcon icon={cilArrowThickRight} />
                          </Link>
                        </CTooltip>
                        <CTooltip content="delete" placement="top">
                          <CButton
                            onClick={() => onDelete(sub.subject_id)}
                            color="danger"
                            className="mx-3"
                          >
                            <CIcon icon={cilTrash} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="delete" placement="top">
                          <Link className="btn btn-success" to={`/subject/edit/${sub.subject_id}`}>
                            <CIcon icon={cilPencil} />
                          </Link>
                        </CTooltip>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  )
}

export default SubjectsList
