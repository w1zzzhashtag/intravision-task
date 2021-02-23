import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiInstance } from "../../app/api";
import { thunkType } from "../../app/store";
import { TenantsType } from "./tenantsTypes";


const initialState: TenantsType = {
  token: null,
  error: null,
}

const tenantsSlice = createSlice({
  name: 'tenants',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload
    }
  }
})


export const { setToken, setError } = tenantsSlice.actions
export default tenantsSlice.reducer

export const getToken = (): thunkType => (dispatch) => {
  dispatch(setError(null))
  apiInstance
    .get<string>('api/Tenants')
    .then(({ data }) => dispatch(setToken(data)))
    .catch((err) => dispatch(setError(err)))
}

