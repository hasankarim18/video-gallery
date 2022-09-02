import { configureStore } from '@reduxjs/toolkit';
import vidoesReducer from '../features/Videos/VideosSlice'
import tagReducer from '../features/Tags/TagSlice';
import vidoeReducer from '../features/Video/VideoSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: vidoesReducer,
    tags: tagReducer,
    video: vidoeReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,

  },
});
