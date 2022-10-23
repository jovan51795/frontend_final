import http from './http'

export const getAllProfessor = () => {
  return http.get('/professor/all')
}

export const getProfById = (id) => {
  return http.get(`/professor/details/${id}`)
}

export const getSubjectByProfessor = (id) => {
  return http.get(`/professor/getSubjectByProfessor?id=${id}`)
}

export const getStudentByProf = (professorId, subjectId) => {
  return http.get(`/professor/studentlist?subID=${subjectId}&profID=${professorId}`)
}

export const getStudentAttendance = (subjectId, professorId, studenId) => {
  return http.get(
    `/professor/attendance?subID=${subjectId}&profID=${professorId}&studID=${studenId}`,
  )
}

export const getStudentGrade = (subjectId, professorId, studentId) => {
  return http.get(`/professor/grades?subID=${subjectId}&profID=${professorId}&studID=${studentId}`)
}

export const getAllStudentGrade = (professorId, subjectId) => {
  return http.get(
    `/professor/getAllGradesbySubjectbyStudents?profID=${professorId}&subID=${subjectId}`,
  )
}

export const setStudentAttendance = (studenId, subjectId, professorId, attendance) => {
  return http.post(
    `/professor/attendancesheet/${studenId}/subject/${subjectId}/prof/${professorId}`, attendance
  )
}

export const setStudentGrade = (studenId, subjectId, professorId, grades) => {
  return http.post(
    `/professor/setgradesto/${studenId}/subject/${subjectId}/prof/${professorId}`,
    grades,
  )
}

export const getPass = (id) => {
  return http.get(`/professor/getpass/${id}`)
}

export const getFail = (id) => {
  return http.get(`/professor/getfail/${id}`)
}

export const getConditional = (id) => {
  return http.get(`/professor/getconditional/${id}`)
}
