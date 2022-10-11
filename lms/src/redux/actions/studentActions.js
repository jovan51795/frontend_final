import { toast } from 'react-toastify'
import http from 'src/services/http'
import variables from '../constants/constantVariables'

export const getAllStudents = () => {
  return async function (dispatch) {
    try {
      await http.get('/student/studentlist').then((res) => {
        if (res && res.data) {
          dispatch({
            type: variables.GETALLSTUDENTS,
            payload: res.data,
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addStudent = (data) => {
  return async function (dispatch) {
    try {
      await http.post('/student/add', data).then((res) => {
        if (res.data && res.data.status === 1) {
          toast.success(res.data.message)
        } else if (res.data && res.data.status === 0) {
          toast.error(res.data.message)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
