import variables from '../constants/constantVariables'

export const students = (state = [], action) => {
  switch (action.type) {
    case variables.GETALLSTUDENTS:
      return action.payload
    default:
      return state
  }
}
