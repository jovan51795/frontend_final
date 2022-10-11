import http from './http'

export const getAll = () => {
  return http.get('/departments/all')
}

export const getAllDepartmentWithSubject = () => {
  return http.get('/departments/alldepwithsub')
}

export const getAllCourse = () => {
  return http.get('/courses/all')
}
