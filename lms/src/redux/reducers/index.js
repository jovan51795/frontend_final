import { combineReducers } from "redux";
import { adminAuth } from "../reducers/adminAuthreducer";

const allReducers = combineReducers({ adminAuth });

export default allReducers;
