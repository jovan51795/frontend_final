import variables from '../constants/constantVariables'

export const subject = (state = {}, action) => {
  switch (action.type) {
    case variables.ADDSUBJECT:
      return action.payload
    default:
      return state
  }
}
