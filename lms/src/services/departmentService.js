import http from './http'

export const getAll = () => {
  return http.get('/departments/all')
}
