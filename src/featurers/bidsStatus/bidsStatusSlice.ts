import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { apiInstance } from "../../app/api"
import { thunkType } from "../../app/store"
import { BidsStatusDataType, BidsStatusType } from "./bidsStatusTypes"


const initialState: BidsStatusType = {
  data: [],
  isLoaded: false,
  error: null
}


export const bidsStatusSlice = createSlice({
  name: 'bidsStatus',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<BidsStatusDataType[]>) => {
      state.data = action.payload
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload
    },
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload
    }
  }
})


export const { setData, setLoaded, setError } = bidsStatusSlice.actions
export default bidsStatusSlice.reducer


export const getBidsStatus = (token: string): thunkType => (dispatch) => {
  dispatch(setLoaded(false))
  dispatch(setError(null))
  apiInstance
    .get<BidsStatusDataType[]>(`api/${token}/Statuses`)
    .then(({ data }) => dispatch(setData(data)))
    .then(() => dispatch(setLoaded(true)))
    .catch(err => dispatch(setError(err)))
}