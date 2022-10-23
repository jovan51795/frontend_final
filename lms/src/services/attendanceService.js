import http from './http'

export const getStudentAttendanceById = (id) => {
  return http.get(`/student/attendance/${id}`)
}
