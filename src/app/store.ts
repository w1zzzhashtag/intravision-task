import {Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
})



if(process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type thunkType = ThunkAction<void, RootState, null, Action<string>>
export default store