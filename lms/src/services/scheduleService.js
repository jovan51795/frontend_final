import http from './http'

export const getAll = () => {
  return http.get('/schedule/all')
}

export const getScheduleById = (id) => {
  return http.get(`/schedule/findbyid/${id}`)
}
