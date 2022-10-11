import variables from '../constants/constantVariables'

export const department = (state = [], action) => {
  switch (action.type) {
    case variables.ADDDEPARTMENT:
      return action.payload
    case variables.GETALLDEPARTMENTS:
      return { ...state, data: action.payload }
    case variables.UPDATEDEPARTENT:
      return action.payload
    case variables.DELETEDEPARTMENT:
      return action.payload
    default:
      return state
  }
}
