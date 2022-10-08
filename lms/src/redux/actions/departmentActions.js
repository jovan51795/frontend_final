import { toast } from 'react-toastify'
import http from 'src/services/http'
import variables from '../constants/constantVariables'

export const addDepartment = (data) => {
  return async function (dispatch) {
    http.post('/departments/add', data).then((res) => {
      console.log(res)
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
