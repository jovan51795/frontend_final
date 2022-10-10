import { toast } from 'react-toastify'
import http from 'src/services/http'
import variables from '../constants/constantVariables'

export const addDepartment = (data) => {
  return async function (dispatch) {
    http.post('/departments/add', data).then((res) => {
      if (res && res.data && res.data.status === 1) {
        toast.success(res.data.message)
        return dispatch({
          type: variables.ADDDEPARTMENT,
          payload: res.data,
        })
      } else if (res && res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }
}

export const getAll = () => {
  return async function (dispatch) {
    await http.get('/departments/all').then((res) => {
      if (res && res.data && res.data.status === 1 && res.data.object.length > 0) {
        return dispatch({
          type: variables.GETALLDEPARTMENTS,
          payload: res.data.object,
        })
      }
    })
  }
}
