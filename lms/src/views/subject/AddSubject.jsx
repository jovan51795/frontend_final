import React from 'react'
import { useDispatch } from 'react-redux'
import SubjectForm from 'src/components/subject/SubjectForm'
import { addSubject } from '../../redux/actions/subjectAction'

const AddSubject = () => {
  const dispatch = useDispatch()
  const handleSubmit = (data) => {
    dispatch(addSubject(data))
  }
  return (
    <div>
      <SubjectForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddSubject
