import variables from '../constants/constantVariables'

export const department = (state = {}, action) => {
  switch (action.type) {
    case variables.ADDDEPARTMENT:
      return action.payload
    default:
      return state
  }
}
