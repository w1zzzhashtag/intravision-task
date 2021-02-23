import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiInstance } from "../../app/api";
import { thunkType } from "../../app/store";
import { BidsDataType, BidsType, getDataType } from "./bidsTypes";


const initialState: BidsType = {
  data: [],
  isLoaded: false,
  error: null
}

const bidsSlice = createSlice({
  name: 'bids',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<BidsDataType[]>) => {
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


export const { setData, setLoaded, setError } = bidsSlice.actions
export default bidsSlice.reducer


export const getBids = (token: string): thunkType => (dispatch) => {
  dispatch(setLoaded(false))
  dispatch(setError(null))
  apiInstance
    .get<getDataType>(`odata/tasks?tenantguid=${token}`)
    .then(({ data }) => dispatch(setData(data.value)))
    .then(() => dispatch(setLoaded(true)))
    .catch(err => dispatch(setError(err)))
}