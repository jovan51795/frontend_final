import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import SubjectsList from 'src/components/subject/SubjectsList'
import { getAll } from '../../services/subjectService'
import { getAllDepartmentWithSubject } from '../../services/departmentService'
import { deleteSubject } from '../../redux/actions/subjectAction'

const SubjectList = () => {
  const [subjects, setsubjects] = useState(null)
  const [departments, setDepartments] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllSubject()
  }, [])

  const handleDeleteSubject = (id) => {
    dispatch(deleteSubject(id))
    const sub = subjects.filter((c) => c.subject_id !== id)
    setsubjects(sub)
  }

  const getAllSubject = () => {
    getAllDepartmentWithSubject().then((res) => {
      if (res && res.data.status === 1) {
        setDepartments(res.data.object)
        setsubjects(res.data.subjects)
      }
    })
  }
  if (subjects) {
    return (
      <div>
        <SubjectsList department={departments} subjects={subjects} onDelete={handleDeleteSubject} />
      </div>
    )
  }
}

export default SubjectList
