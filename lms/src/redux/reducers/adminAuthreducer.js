import variables from '../constants/constantVariables'

export const adminAuth = (state = {}, action) => {
  switch (action.type) {
    case variables.ADMINREGISTER:
      return {
        ...state,
        payload: action.payload,
      }
    case variables.ADMINLOGIN:
      return action.payload
    case variables.STUDENTLOGIN:
      return action.payload
    default:
      return state
  }
}
