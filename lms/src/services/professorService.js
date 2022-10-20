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

export const getStudentGrade = (subjectId, professorId, studenId) => {
  return http.get(`/professor/grades?subID=${subjectId}&profID=${professorId}&studID=${studenId}`)
}

export const setStudentAttendance = (studenId, subjectId, professorId) => {
  return http.post(
    `/professor/attendancesheet/${studenId}/subject/${subjectId}/prof/${professorId}`,
  )
}

export const setStudentGrade = (studenId, subjectId, professorId, grades) => {
  return http.post(
    `/professor/setgradesto/${studenId}/subject/${subjectId}/prof/${professorId}`,
    grades,
  )
}

// export function setStudentGrade(studenId, subjectId, professorId, grade) {
//   const gradeClone = { ...grade }
//   Object.keys(grade).forEach((key) => {
//     if (grade[key] === '' || grade[key] === null || grade[key] === 'undefined') {
//       delete gradeClone[key]
//     }
//   })
//   return http.post(
//     `/professor/setgradesto/${studenId}/subject/${subjectId}/prof/${professorId}`,
//     gradeClone,
//   )
// }
