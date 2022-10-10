import http from './http'

export const getAll = () => {
  return http.get('/departments/all')
}

export const getAllCourse = () => {
  return http.get('/courses/all')
}
