import { toast } from 'react-toastify'
import http from 'src/services/http'
import variables from '../constants/constantVariables'

export const addProfessor = (data) => {
  return async function (dispatch) {
    await http.post('/professor/add', data).then((res) => {
      if (res.data && res.data.status === 1) {
        toast.success(res.data.message)
        dispatch({
          type: variables.ADDPROFESSOR,
          payload: res.data,
        })
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }
}
