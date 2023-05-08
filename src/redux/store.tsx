import { configureStore } from '@reduxjs/toolkit'
import FilesReducer from "./features/files/filesSlice"
import languageReducer from "./features/language/languageSlice"

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';


const persistLanguageConfig = {
  key: 'language',
  storage,
}

const persistedReducer = persistReducer(persistLanguageConfig, languageReducer)

export const store = configureStore({
  reducer: {
    files: FilesReducer,
    language:persistedReducer,
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch