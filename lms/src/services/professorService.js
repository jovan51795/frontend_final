import http from './http'

export const getAllProfessor = () => {
  return http.get('/professor/all')
}

export const getProfById = (id) => {
  return http.get(`/professor/details/${id}`)
}
