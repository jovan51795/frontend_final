import { toast } from 'react-toastify'
import http from 'src/services/http'
import variables from '../constants/constantVariables'

export const addSubject = (data) => {
  return async function (dispatch) {
    await http.post('/subject/add', data).then((res) => {
      console.log(res.data, 'the data')
      if (res.data && res.data.status === 1) {
        dispatch({
          type: variables.ADDSUBJECT,
          payload: res.data.object,
        })
        toast.success(res.data.message)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }
}
