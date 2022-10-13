import http from './http'

export const getAll = () => {
  return http.get('/subject/all')
}

export const getSubjectById = (id) => {
  return http.get(`/subject/getbyid/${id}`)
}
