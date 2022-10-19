import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUserInfo } from 'src/services/userInfo'
import { getSubjectByProfessor } from 'src/services/professorService'
import FacultyClassesTable from 'src/components/faculty/FacultyClassesTable'

const FacultySubjects = () => {
  const param = useParams()
  const userInfo = getUserInfo().object
  const [profsubject, setProfSubject] = useState()

  useEffect(() => {
    getSubjectByProfessor(+userInfo.professor_id).then((res) => {
      if (res.data && res.data.status === 1) {
        setProfSubject(res.data.object)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }, [param])

  if (profsubject) {
    return (
      <>
        <div>
          <FacultyClassesTable profsubject={profsubject} />
        </div>
      </>
    )
  }
}

export default FacultySubjects
