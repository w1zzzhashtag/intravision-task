import { combineReducers } from "@reduxjs/toolkit"
import bidsReducer from "../featurers/bids/bidsSlice"
import bidsCardReducer from "../featurers/bidsCard/bidsCardSlice"
import bidsStatusReducer from "../featurers/bidsStatus/bidsStatusSlice"
import usersReducer from "../featurers/users/usersSlice"


const rootReducer = combineReducers({
  bids: bidsReducer,
  bidsCard: bidsCardReducer,
  bidsStatus: bidsStatusReducer,
  users: usersReducer
})


export default rootReducer