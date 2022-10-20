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


export const getPass = (id) =>{
  return http.get(`/professor/getpass/${id}`)
}

export const getFail = (id) =>{
  return http.get(`/professor/getfail/${id}`)
}

export const getConditional = (id) =>{
  return http.get(`/professor/getconditional/${id}`)
}