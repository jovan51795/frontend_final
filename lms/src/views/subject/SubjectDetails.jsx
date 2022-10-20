import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Details from 'src/components/subject/Details'
import { getSubjectById } from '../../services/subjectService'

const SubjectDetails = () => {
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

  if (subject) {
    return (
      <div>
        <Details subject={subject} />
      </div>
    )
  }
}

export default SubjectDetails
