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
  CTableDataCell,
  CTooltip,
} from '@coreui/react'
import 'src/scss/_admin.scss'
import { Btn } from 'src/styles/Btn.styles.'
import { BiBookmarkAltPlus } from 'react-icons/bi'
import { FiFileText, FiArchive } from 'react-icons/fi'
import { RiEdit2Fill } from 'react-icons/ri'
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
  console.log(subject)
  const columns = [
    { key: 'subject_id', label: 'ID', filter: false, sorter: true, _style: { width: '10%' } },
    { key: 'subjectCode', filter: false, sorter: true, _style: { width: '18%' } },
    { key: 'subjectTitle', filter: false, sorter: true, _style: { width: '17%' } },
    { key: 'units', filter: false, sorter: true, _style: { width: '10%' } },
    { key: 'prerequisites', filter: false, sorter: true, _style: { width: '17%' } },
    {
      key: 'activeDeactive',
      label: 'Status',
      filter: false,
      sorter: true,
      _style: { width: '11%' },
    },
    { key: 'actions', filter: false, sorter: false, _style: { width: '18%' } },
  ]
  return (
    <>
      <CRow>
        <CCol className="mb-3">
          <div className="container">
            <div className="d-flex justify-content-end align-items-center">
              <Btn to="/professor/add" className="my-3">
                <BiBookmarkAltPlus className="pb-1 fs-5" /> Add Subject
              </Btn>
            </div>
          </div>
          <hr className="m-0" />
        </CCol>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <CRow className="text-center fs-4 py-2">
                <strong>SUBJECTS MASTERLIST</strong>
              </CRow>
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
                        <CTooltip content="View Details" placement="top" className="align-middle">
                          <Link
                            className="btn ms-btn-view align-middle"
                            to={`/subject/details/${sub.subject_id}`}
                          >
                            <FiFileText className="nav-icon" />
                          </Link>
                        </CTooltip>
                        <div className="vr"></div>
                        <CTooltip content="delete" placement="top">
                          <CButton
                            onClick={() => onDelete(sub.subject_id)}
                            color="danger"
                            className="mx-1 ms-btn-view align-middle"
                          >
                            <FiArchive className="nav-icon" />
                          </CButton>
                        </CTooltip>
                        <div className="vr"></div>
                        <CTooltip content="delete" placement="top">
                          <Link
                            className="btn ms-btn-view align-middle"
                            to={`/subject/edit/${sub.subject_id}`}
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
