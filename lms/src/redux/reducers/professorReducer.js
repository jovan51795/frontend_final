import variables from '../constants/constantVariables'

export const professor = (state = {}, action) => {
  switch (action.type) {
    case variables.ADDPROFESSOR:
      return action.payload
    case variables.PROFESSORDETAILS:
      return action.payload
    case variables.DELETEPROFESSOR:
      return action.payload
    case variables.SETATTENDANCE:
      return action.payload
    case variables.SETGRADE:
      return action.payload
    default:
      return state
  }
}
