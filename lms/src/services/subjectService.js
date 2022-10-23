import http from './http'

export const getAll = () => {
  return http.get('/subject/all')
}

export const getSubjectById = (id) => {
  return http.get(`/subject/getbyid/${id}`)
}

export const updateSubjectHistory = (subjectId, professorId, form) => {
  return http.post(`/subject/${subjectId}/professor/${professorId}`, form)
}

export const getStudentScheduleById = (id) => {
  return http.get(`/student/schedule/${id}`)
}

export const getFacultyScheduleById = (id) => {
  return http.get(`/professor/schedule/${id}`)
}

export const getCourseEvaluation = (id, sem, year) => {
  return http.get(`student/evaluation/?id=${id}&sem=${sem}&yrlvl=${year}`)
}
