import http from '../../services/http'
import variables from '../constants/constantVariables'
import { toast } from 'react-toastify'

export const adminRegister = (data) => {
  return async function (dispatch) {
    try {
      await http.post('/register', data).then((res) => {
        if (res && res.data && res.data.status === 1) {
          dispatch({
            type: variables.ADMINREGISTER,
            payload: res.data.status,
          })
        } else {
          toast.error(res.data.message)
        }
      })
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        alert('unexpected error occurred')
      }
    }
  }
}

export const adminLogin = (data) => {
  return async function (dispatch) {
    try {
      await http.post('/login', data).then((res) => {
        if (res && res.data && res.data.status === 1) {
          localStorage.setItem('lms', JSON.stringify(res.data))
          dispatch({
            type: variables.ADMINLOGIN,
            payload: res.data,
          })
        } else {
          toast.error(res.data.message)
        }
      })
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        alert('unexpected error occurred')
      }
    }
  }
}

export const studentLogin = (data) => {
  return async function (dispatch) {
    try {
      await http.post('/student/student-login', data).then((res) => {
        if (res.data && res.data.status === 1) {
          localStorage.setItem('lms', JSON.stringify(res.data))
          dispatch({
            type: variables.ADMINLOGIN,
            payload: res.data,
          })
        } else {
          toast.error(res.data.message)
        }
      })
    } catch (error) {
      if (error.response.data.statusCode === 404) {
        alert('unexpected error occurred')
      }
    }
  }
}
