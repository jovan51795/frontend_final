import http from './http'

export function getAccessToken() {
  return localStorage.getItem('lms')
}

export function logout() {
  localStorage.removeItem('lms')
}

export const adminLogin = (data) => {
  console.log('admin')
  return http.post('/login', data)
}

export const studentLogin = (data) => {
  console.log('student')
  return http.post('/student/student-login', data)
}

export const professorLogin = (data) => {
  console.log('prof')
  return http.post('/professor/login', data)
}


export const parentLogin = (data) => {
  console.log('parent')
  return http.post('/parent/login', data)
}
