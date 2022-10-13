import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import SubjectForm from 'src/components/subject/SubjectForm'
import { getSubjectById } from '../../services/subjectService'
import { updateSubject } from '../../redux/actions/subjectAction'
import { useDispatch } from 'react-redux'

const EditSubject = () => {
  const dispatch = useDispatch()
  const param = useParams()
  const [subject, setSubject] = useState()
  useEffect(() => {
    getSubjectById(+param.id).then((res) => {
      if (res.data && res.data.status === 1) {
        setSubject(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [param])

  const handleOnSubmit = (data) => {
    dispatch(updateSubject(data))
  }
  if (subject) {
    return (
      <div>
        <SubjectForm initialValue={subject} onSubmit={handleOnSubmit} />
      </div>
    )
  }
}

export default EditSubject
