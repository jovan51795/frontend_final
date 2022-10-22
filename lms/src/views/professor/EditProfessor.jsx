import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProfessorForm from 'src/components/professor/ProfessorForm'
import { getProfById } from '../../services/professorService'
import { updateProfessor } from '../../redux/actions/professorAction'
import Loading from 'src/components/loading/Loading'

const EditProfessor = () => {
  const [prof, setProf] = useState(null)
  const param = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    getProfById(+param.id).then((res) => {
      if (res.data) {
        setProf(res.data.object)
      }
    })
  }, [param])

  const handleSubmit = (data) => {
    dispatch(updateProfessor(data))
  }
  if (prof) {
    return (
      <div>
        <ProfessorForm initialValue={prof} onSubmit={handleSubmit} />
      </div>
    )
  } else {
    return <Loading />
  }
}

export default EditProfessor
