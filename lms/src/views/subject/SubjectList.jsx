import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import SubjectsList from 'src/components/subject/SubjectsList'
import { getAll } from '../../services/subjectService'
import { deleteSubject } from '../../redux/actions/subjectAction'

const SubjectList = () => {
  const [subjects, setsubjects] = useState(null)
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
    getAll().then((res) => {
      if (res && res.data) {
        setsubjects(res.data)
      }
    })
  }
  if (subjects) {
    return (
      <div>
        <SubjectsList subjects={subjects} onDelete={handleDeleteSubject} />
      </div>
    )
  }
}

export default SubjectList
