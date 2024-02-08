import { configureStore } from '@reduxjs/toolkit'; 
import { pageReducer } from './pageSlice';

export const store = configureStore({
    reducer: {
      page: pageReducer.reducer
    }
  })

export type RootState = ReturnType<typeof store.getState>