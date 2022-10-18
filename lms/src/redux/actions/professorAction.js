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

export const professorDetails = (id) => {
  return async function (dispatch) {
    await http.get(`/professor/details/${id}`).then((res) => {
      if (res.data) {
        dispatch({
          type: variables.PROFESSORDETAILS,
          payload: res.data.object,
        })
      }
    })
  }
}

export const updateProfessor = (data) => {
  return async function (dispatch) {
    await http.patch(`/professor/update/${data.professor_id}`, data).then((res) => {
      if (res.data && res.data.status === 1) {
        toast.success(res.data.message)
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }
}

export const deleteProfessor = (id) => {
  return async function (dispatch) {
    await http.delete(`/professor/delete/${id}`).then((res) => {
      if (res.data && res.data.status === 1) {
        toast.success(res.data.message)
        dispatch({
          type: variables.DELETEPROFESSOR,
          payload: res.data,
        })
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message)
      }
    })
  }
}

export const studentsListByProf = () => {}
