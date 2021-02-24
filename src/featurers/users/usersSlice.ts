import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { apiInstance } from "../../app/api"
import { thunkType } from "../../app/store"
import { UsersDataType, UsersType } from "./usersTypes"


const initialState: UsersType = {
  data: [],
  isLoaded: false,
  error: null
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<UsersDataType[]>) => {
      state.data = action.payload
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload
    },
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload
    },
  }
})


export const { setData, setLoaded, setError } = usersSlice.actions
export default usersSlice.reducer

export const getUsers = (token: string): thunkType => (dispatch) => {
  dispatch(setLoaded(false))
  dispatch(setError(null))
  apiInstance
    .get<UsersDataType[]>(`api/${token}/Users`)
    .then(({ data }) => dispatch(setData(data)))
    .then(() => dispatch(setLoaded(true)))
    .catch(err => dispatch(setError(err)))
} 
