import http from './http'

export const getGradesbyId = (id) => {
  return http.get(`/student/grades/${id}`)
}
