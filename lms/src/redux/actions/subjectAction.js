import { toast } from 'react-toastify'
import http from 'src/services/http'
import variables from '../constants/constantVariables'

export const addSubject = (data) => {
  return async function (dispatch) {
    await http.post('/subject/add', data).then((res) => {
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

export const deleteSubject = (id) => {
  return async function (dispatch) {
    await http.delete(`/subject/delete/${id}`).then((res) => {
      console.log(res)
      if (res.data && res.data.status === 1) {
        dispatch({
          type: variables.DELETESUBJECT,
          payload: res.data.object,
        })
        toast.success(res.data.message)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }
}

export const updateSubject = (data) => {
  return async function (dispatch) {
    await http.patch(`/subject/update/${data.subject_id}`, data).then((res) => {
      if (res.data && res.data.status === 1) {
        toast.success(res.data.message)
        dispatch({
          type: variables.UPDATESUBJECT,
          payload: res.data,
        })
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }
}
