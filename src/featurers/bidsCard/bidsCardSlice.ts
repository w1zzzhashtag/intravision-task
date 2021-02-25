import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiInstance } from "../../app/api";
import { thunkType } from "../../app/store";
import { BidsStatusDataType } from "../bidsStatus/bidsStatusTypes";
import { UsersDataType } from "../users/usersTypes";
import { BidsCardDataType, BidsCardType, SendBidsCardDataType } from "./bidsCardTypes";

const initialState: BidsCardType = {
  data: null,
  isLoaded: false,
  error: null,
  putBidsCardIsComplete: false,
  postBidsCardIsComplete: null,
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
    },
    setDataStatus: (state, action:PayloadAction<BidsStatusDataType>) => {
      if(state.data) {
        state.data.statusId = action.payload.id
        state.data.statusName = action.payload.name
        state.data.statusRgb = action.payload.rgb
      }
    },
    setDataExecutor: (state, action:PayloadAction<UsersDataType>) => {
      if(state.data) {
        state.data.executorId = action.payload.id
        state.data.executorName = action.payload.name
      }
    },
    setPutBidsCardIsComplete: (state, action:PayloadAction<boolean>) => {
      state.putBidsCardIsComplete = action.payload
    },
    setPostBidsCardIsComplete: (state, action:PayloadAction<number | null>) => {
      state.postBidsCardIsComplete = action.payload
    }
  }
})

export const { 
  setData, setLoaded, setError, 
  setDataStatus, setDataExecutor,
  setPutBidsCardIsComplete,
  setPostBidsCardIsComplete
} = bidsCardSlice.actions
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

export const putBidsCard = (token: string, data: SendBidsCardDataType):thunkType => (dispatch) => {
  dispatch(setPutBidsCardIsComplete(false))
  apiInstance
    .put(`api/${token}/Tasks`, data)
    .then(({data}) => dispatch(setPutBidsCardIsComplete(true)))
    .catch(err => alert(err.message))
}

export const postBidsCard = (token: string, data: SendBidsCardDataType):thunkType => (dispatch) => {
  apiInstance
    .post<number>(`api/${token}/Tasks`, data)
    .then(({data}) => dispatch(setPostBidsCardIsComplete(data)))
    .catch(err => alert(err.message))
}