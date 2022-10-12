import http from './http'

export const getAll = () => {
  return http.get('/departments/all')
}

export const getAllDepartmentWithSubject = () => {
  return http.get('/departments/alldepwithsub')
}

export const getDepartmentById = (id) => {
  return http.get(`/departments/findbyid/${id}`)
}

export const getAllCourse = () => {
  return http.get('/courses/all')
}
