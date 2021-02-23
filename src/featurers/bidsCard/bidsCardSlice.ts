import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiInstance } from "../../app/api";
import { thunkType } from "../../app/store";
import { BidsDataType } from "../commonTypes";
import { BidsCardDataType, BidsCardType } from "./bidsCardTypes";

const initialState: BidsCardType = {
  data: null,
  isLoaded: false,
  error: null,
}

const bidsCardSlice = createSlice({
  name: 'bidsCard',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<BidsCardDataType>) => {
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

export const { setData, setLoaded, setError } = bidsCardSlice.actions
export default bidsCardSlice.reducer


export const getBidsCard = (token: string, id: string): thunkType => (dispatch) => {
  dispatch(setLoaded(false))
  dispatch(setError(null))
  apiInstance
    .get<BidsCardDataType>(`api/${token}/Tasks/${id}`)
    .then(({ data }) => dispatch(setData(data)))
    .then(() => dispatch(setLoaded(true)))
    .catch(err => dispatch(setError(err)))
}