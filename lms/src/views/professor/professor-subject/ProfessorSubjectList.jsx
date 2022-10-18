import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfessorSubjectTable from 'src/components/professor/professor-subject/ProfessorSubjectTable'
import { getAll } from 'src/services/subjectService'

const ProfessorSubjectList = () => {
  const params = useParams()
  const [subjects, setSubjects] = useState([])
  useEffect(() => {
    getAllSubject()
  }, [])

  const getAllSubject = () => {
    getAll().then((res) => {
      if (res && res.data) {
        setSubjects(res.data)
      }
    })
  }

  return (
    <div>
      <ProfessorSubjectTable subjectList={subjects} params={params.id} />
    </div>
  )
}

export default ProfessorSubjectList
