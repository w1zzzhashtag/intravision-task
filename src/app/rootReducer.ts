import { combineReducers } from "@reduxjs/toolkit"
import tenantsReducer from '../featurers/token/tenantsSlice'
import bidsReducer from "../featurers/bids/bidsSlice"
import bidsCardReducer from "../featurers/bidsCard/bidsCardSlice"
import bidsStatusReducer from "../featurers/bidsStatus/bidsStatusSlice"


const rootReducer = combineReducers({
  tenants: tenantsReducer,
  bids: bidsReducer,
  bidsCard: bidsCardReducer,
  bidsStatus: bidsStatusReducer
})


export default rootReducer