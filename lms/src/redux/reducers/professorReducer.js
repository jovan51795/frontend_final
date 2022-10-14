import variables from '../constants/constantVariables'

export const professor = (state = {}, action) => {
  switch (action.type) {
    case variables.ADDPROFESSOR:
      return action.payload
    default:
      return state
  }
}
