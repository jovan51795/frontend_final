import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { adminAuth } from './redux/reducers/adminAuthreducer'
import { students } from './redux/reducers/studentReducer'
import { department } from './redux/reducers/departmentReducer'
import { subject } from './redux/reducers/subjectReducer'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const allReducers = combineReducers({ adminAuth, changeState, students, department, subject })

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
export default store
