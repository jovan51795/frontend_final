import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUserInfo } from 'src/services/userInfo'
import ProfClassSched from 'src/components/faculty/ProfClassSched'

import { getSubjectByProfessor } from 'src/services/professorService'

const FacultySchedule = () => {
  const param = useParams()
  const userInfo = getUserInfo().object
  const [profsubject, setProfSubject] = useState()
  console.log(userInfo)

  useEffect(() => {
    getSubjectByProfessor(+userInfo.professor_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setProfSubject(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [param])

  console.log(profsubject)
  // if (profsubject) {
  return (
    <div>
      <div>
        <ProfClassSched />
      </div>
    </div>
  )
  // }
}

export default FacultySchedule
