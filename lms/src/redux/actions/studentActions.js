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
