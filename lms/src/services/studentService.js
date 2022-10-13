import http from './http'

export const getStudentById = (id) => {
  return http.get(`/student/getbyid/${id}`)
}
