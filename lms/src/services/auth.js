import http from './http'

export function getAccessToken() {
  return localStorage.getItem('lms')
}

export function logout() {
  localStorage.removeItem('lms')
}

export const adminLogin = (data) => {

  return http.post('/login', data)
}

export const studentLogin = (data) => {

  return http.post('/student/student-login', data)
}

export const professorLogin = (data) => {

  return http.post('/professor/login', data)
}


export const parentLogin = (data) => {
  return http.post('/parent/login', data)
}
