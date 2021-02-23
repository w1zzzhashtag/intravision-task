import { combineReducers } from "@reduxjs/toolkit"
import tenantsReducer from '../featurers/token/tenantsSlice'
import bidsReducer from "../featurers/bids/bidsSlice"



const rootReducer = combineReducers({
  tenants: tenantsReducer,
  bids: bidsReducer
})


export default rootReducer