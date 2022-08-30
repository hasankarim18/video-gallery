import { configureStore } from '@reduxjs/toolkit';
import vidoesReducer from '../features/Videos/VideosSlice'

export const store = configureStore({
  reducer: {
    videos: vidoesReducer
  },
});
