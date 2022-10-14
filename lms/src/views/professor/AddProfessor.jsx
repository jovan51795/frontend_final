import React from 'react'
import { useDispatch } from 'react-redux'
import ProfessorForm from 'src/components/professor/ProfessorForm'
import { addProfessor } from '../../redux/actions/professorAction'

const AddProfessor = () => {
  const dispatch = useDispatch()
  const handleSubmit = (data) => {
    dispatch(addProfessor(data))
  }
  return (
    <div>
      <ProfessorForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddProfessor
