export const getUserInfo = () => {
  if (localStorage.getItem('lms')) {
    return JSON.parse(localStorage.getItem('lms'))
  }
  return false
}
