import http from './http'

export const getStudentById = (id) => {
  return http.get(`/student/getbyid/${id}`)
}


export const getRecommendedSubject = (sem, yrlvl, id) => {
  return http.get(`/student/subjectrecommendations?sem=${sem}&yrlvl=${yrlvl}&courseID=${id}`)
}
export const getSchedule = (id) => {
  return http.get(`/student/getScheduleSubject?subjectID=${id}`)
}

export const addSubject = (studentID,subID) => {
  return http.post(`student/addStudentSubject?studentID=${studentID}&subjectID=${subID}`)
}
