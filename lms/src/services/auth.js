export function getAccessToken() {
  return localStorage.getItem('lms')
}

export function logout() {
  localStorage.removeItem('lms')
}
