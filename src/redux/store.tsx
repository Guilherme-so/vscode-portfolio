import { configureStore } from '@reduxjs/toolkit'
import FilesReducer from "./features/files/filesSlice"

export const store = configureStore({
  reducer: {
    files: FilesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch