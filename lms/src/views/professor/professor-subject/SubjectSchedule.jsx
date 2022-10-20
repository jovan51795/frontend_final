import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SubjectScheduleForm from 'src/components/professor/professor-subject/SubjectScheduleForm'
import * as subjectService from 'src/services/subjectService'
import { toast } from 'react-toastify'

const SubjectSchedule = () => {
  const params = useParams()
  const navigate = useNavigate()

  const handleSubmit = (form) => {
    subjectService
      .updateSubjectHistory(+params.subject_id, +params.professor_id, form)
      .then((res) => {
        if (res && res.data && res.data.status === 1) {
          toast.success(res.data.message)
          navigate('/professors')
        } else if (res && res.data && res.data.status === 0) {
          toast.error(res.data.message)
        }
      })
  }
  return (
    <div>
      <SubjectScheduleForm onSubmit={handleSubmit} />
    </div>
  )
}

export default SubjectSchedule
